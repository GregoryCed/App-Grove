import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Tarefa } from '../interfaces/tarefa';
import { AuthService } from '../services/auth.service';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-criar-tarefas',
  templateUrl: './criar-tarefas.page.html',
  styleUrls: ['./criar-tarefas.page.scss'],
})
export class CriarTarefasPage implements OnInit {
  private tarefa: Tarefa = {};
  private loading: any;

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private tarefaService: TarefaService,
    ) { }

  ngOnInit() {
  }

  async saveTarefa(){
    await this.presentLoading();

    this.tarefa.userId = this.authService.getAuth().currentUser.uid;

    try{
      await this.tarefaService.addTarefa(this.tarefa);
      await this.loading.dismiss();

    }catch(error){
      this.presentToast('Erro ao tentar Salvar');
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

  home(){
    this.router.navigate(['home'])
  }

  tarefas(){
    this.router.navigate(['tarefas'])
  }

}
