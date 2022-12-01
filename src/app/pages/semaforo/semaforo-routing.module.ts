import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemaforoPage } from './semaforo.page';

const routes: Routes = [
  {
    path: '',
    component: SemaforoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemaforoPageRoutingModule {}
