import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjetivoPage } from './objetivo.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjetivoPageRoutingModule {}
