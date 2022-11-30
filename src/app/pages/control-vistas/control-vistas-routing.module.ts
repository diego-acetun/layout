import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlVistasPage } from './control-vistas.page';

const routes: Routes = [
  {
    path: '',
    component: ControlVistasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlVistasPageRoutingModule {}
