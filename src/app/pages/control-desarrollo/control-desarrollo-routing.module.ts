import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlDesarrolloPage } from './control-desarrollo.page';

const routes: Routes = [
  {
    path: '',
    component: ControlDesarrolloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlDesarrolloPageRoutingModule {}
