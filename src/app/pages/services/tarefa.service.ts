import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Tarefa } from '../interfaces/tarefa';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefasCollection: AngularFirestoreCollection<Tarefa>;

  constructor(private afs: AngularFirestore) { 
    this.tarefasCollection = this.afs.collection<Tarefa>('Tarefas');
  }

  getTarefas(){
    return this.tarefasCollection.snapshotChanges().pipe(
      map(actions  => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        })
      })
    )
  }

  addTarefa(tarefa: Tarefa){
    return this.tarefasCollection.add(tarefa);
  }

  getTarefa(id: string){
    return this.tarefasCollection.doc<Tarefa>(id).valueChanges();
  }

  updateTarefa(id: string, tarefa: Tarefa){
    return this.tarefasCollection.doc<Tarefa>(id).update(tarefa);
  }

  deleteTarefa(id: string){
    return this.tarefasCollection.doc(id).delete();
  }
}
