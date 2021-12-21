import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.page.html',
  styleUrls: ['./objetivo.page.scss'],
})
export class ObjetivoPage implements OnInit {

  constructor(
    private router: Router,
    private menuCtrl: MenuController
    ) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  home(){
    this.router.navigate(['home']);
  }

}
