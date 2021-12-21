import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarTarefaPage } from './editar-tarefa.page';

const routes: Routes = [
  {
    path: '',
    component: EditarTarefaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarTarefaPageRoutingModule {}
