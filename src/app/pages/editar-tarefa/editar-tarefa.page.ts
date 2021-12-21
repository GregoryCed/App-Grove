import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Tarefa } from '../interfaces/tarefa';
import { AuthService } from '../services/auth.service';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.page.html',
  styleUrls: ['./editar-tarefa.page.scss'],
})
export class EditarTarefaPage implements OnInit {
  private tarefa: Tarefa = {};
  private tarefaId: string = null;
  private tarefaSubscription: Subscription;
  private loading: any;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private tarefaService: TarefaService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private navCtrl: NavController
    ) { 
      this.tarefaId = this.activeRoute.snapshot.params['id'];

      if (this.tarefaId) this.loadTarefa();
    }

  ngOnInit() {
  }
  
  loadTarefa(){
    this.tarefaSubscription = this.tarefaService.getTarefa(this.tarefaId).subscribe(data => {
      this.tarefa = data;
    });
  }

  async saveTarefa(){
    await this.presentLoading();

    this.tarefa.userId = this.authService.getAuth().currentUser.uid;

    try{
      await this.tarefaService.updateTarefa(this.tarefaId, this.tarefa);
      await this.loading.dismiss();

      this.navCtrl.navigateBack('/tarefas');
    }catch(error){
      this.presentToast('Erro ao tentar editar');
      this.loading.dismiss();
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

}
