import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutPageModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../products/products.module').then(
            (m) => m.ProductsPageModule
          ),
      },
      {
        path: 'reports/control-desarrollo',
        loadChildren: () =>
          import('../control-desarrollo/control-desarrollo.module').then(
            (m) => m.ControlDesarrolloPageModule
          ),
      },
      {
        path: 'reports/control-vistas',
        loadChildren: () =>
          import('../control-vistas/control-vistas.module').then(
            (m) => m.ControlVistasPageModule
          ),
      },
      {
        path: 'reports/estadisticas-tablas',
        loadChildren: () =>
          import('../estadisticas-tablas/estadisticas-tablas.module').then(
            (m) => m.EstadisticasTablasPageModule
          ),
      },
      {
        path: 'reports/traduccion-archivos',
        loadChildren: () =>
          import('../traduccion-archivos/traduccion-archivos.module').then(
            (m) => m.TraduccionArchivosPageModule
          ),
      },
      {
        path: 'reports/control-desarrollo',
        loadChildren: () =>
          import('../control-desarrollo/control-desarrollo.module').then(
            (m) => m.ControlDesarrolloPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
