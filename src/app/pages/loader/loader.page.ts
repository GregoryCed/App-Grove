import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(private router: Router, public menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    setTimeout(() => {
      this.router.navigate(['tela-inicial']);
    }, 2000)
  }

}
