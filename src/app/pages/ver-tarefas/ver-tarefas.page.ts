import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Tarefa } from '../interfaces/tarefa';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-ver-tarefas',
  templateUrl: './ver-tarefas.page.html',
  styleUrls: ['./ver-tarefas.page.scss'],
})
export class VerTarefasPage implements OnInit {
  private tarefa: Tarefa = {};
  public tarefaId: string = null;
  private tarefaSubscription: Subscription;
  private loading: any;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private tarefaService: TarefaService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public alertController: AlertController
    ) { 
      this.tarefaId = this.activeRoute.snapshot.params['id'];

      if (this.tarefaId) this.loadTarefa();
    }

  ngOnInit() {
  }

  ngOnDestroy(){
    if (this.tarefaSubscription) this.tarefaSubscription.unsubscribe();
  }

  loadTarefa(){
    this.tarefaSubscription = this.tarefaService.getTarefa(this.tarefaId).subscribe(data => {
      this.tarefa = data;
    })
  }

  async deleteTarefa(){
    try{
      await this.tarefaService.deleteTarefa(this.tarefaId);
    } catch(error){
      this.presentToast('Erro ao tentar deletar');
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({message: 'Por favor, aguarde...'});
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({message, duration: 2000});
    toast.present();
  }

  tarefas(){
    this.router.navigate(['tarefas'])
  }

  home(){
    this.router.navigate(['home'])
  }

  editarTarefas(){
    this.router.navigate(['editar-tarefa'])
  }

  async alerta(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class'
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
