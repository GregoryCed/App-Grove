import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarTarefasPageRoutingModule } from './criar-tarefas-routing.module';

import { CriarTarefasPage } from './criar-tarefas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarTarefasPageRoutingModule
  ],
  declarations: [CriarTarefasPage]
})
export class CriarTarefasPageModule {}
