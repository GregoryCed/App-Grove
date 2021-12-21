import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarTarefasPage } from './criar-tarefas.page';

const routes: Routes = [
  {
    path: '',
    component: CriarTarefasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarTarefasPageRoutingModule {}
