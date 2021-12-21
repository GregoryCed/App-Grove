import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerTarefasPageRoutingModule } from './ver-tarefas-routing.module';

import { VerTarefasPage } from './ver-tarefas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerTarefasPageRoutingModule
  ],
  declarations: [VerTarefasPage]
})
export class VerTarefasPageModule {}
