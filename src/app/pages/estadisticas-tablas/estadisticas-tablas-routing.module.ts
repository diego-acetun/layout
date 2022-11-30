import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasTablasPage } from './estadisticas-tablas.page';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasTablasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticasTablasPageRoutingModule {}
