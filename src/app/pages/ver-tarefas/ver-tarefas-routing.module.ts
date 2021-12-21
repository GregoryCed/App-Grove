import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerTarefasPage } from './ver-tarefas.page';

const routes: Routes = [
  {
    path: '',
    component: VerTarefasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerTarefasPageRoutingModule {}
