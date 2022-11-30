import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraduccionArchivosPage } from './traduccion-archivos.page';

const routes: Routes = [
  {
    path: '',
    component: TraduccionArchivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraduccionArchivosPageRoutingModule {}
