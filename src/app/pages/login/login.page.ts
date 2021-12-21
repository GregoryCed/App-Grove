import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { LoginPageForm } from './login.page.form';

import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: User  = {};
  private loading: any;

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  objetivo(){
    this.router.navigate(['objetivo']);
  }

  async login(){
    await this.presentLoading();

    try{
      await this.authService.login(this.userLogin);
    } catch(error){
      let message: string;

      switch(error.code){
        case 'auth/argument-error':
          message = 'Digite um email e uma senha.';
          break;

        case 'auth/invalid-email':
          message = 'Email ou senha inválidos.';
          break;

        case 'auth/wrong-password':
          message = 'Email ou senha inválidos.';
          break;
          
          case 'auth/user-not-found':
          message = 'Email não cadastrado.';
          break;
      }

      this.presentToast(message);
    } finally{
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

}
