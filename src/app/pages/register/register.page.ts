import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { RegisterPageForm } from './register.page.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  public userRegister: User  = {};
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
    this.form = new RegisterPageForm(this.formBuilder).createForm();
  }

  async register(){
    await this.presentLoading();

    try{
      await this.authService.register(this.userRegister);
    } catch(error){
     let message: string;

      switch(error.code){
        case 'auth/argument-error':
          message = 'Digite um email e uma senha.';
          break;

        case 'auth/email-already-in-use':
          message = 'Email já cadastrado.';
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
