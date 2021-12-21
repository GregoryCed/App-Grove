import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
    public menuCtrl: MenuController,
    private authService: AuthService,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  tarefas(){
    this.router.navigate(['tarefas'])
  }

  criarTarefas(){
    this.router.navigate(['criar-tarefas'])
  }

  async logout(){
    let sim = 0;
    let nao = 0;

    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Tem certeza que deseja sair da sua conta ?',
      buttons: [
        {
          text: 'Sim',
          handler: ()=>{
            try {
              this.authService.logout();
            } catch(error){
            console.error(error);
          }
          }
         },{
          text:'Nao',
        }
      ]
    });

    await alert.present();
  }

}
