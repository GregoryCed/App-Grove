import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetivoPageRoutingModule } from './objetivo-routing.module';

import { ObjetivoPage } from './objetivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetivoPageRoutingModule
  ],
  declarations: [ObjetivoPage]
})
export class ObjetivoPageModule {}
