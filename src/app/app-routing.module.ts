import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./pages/home/home.module').then((m) => m.HomePageModule),
  // },
  {
    path: '',
    redirectTo: 'semaforo',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'semaforo',
    loadChildren: () => import('./pages/semaforo/semaforo.module').then( m => m.SemaforoPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./pages/reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: 'control-desarrollo',
    loadChildren: () => import('./pages/control-desarrollo/control-desarrollo.module').then( m => m.ControlDesarrolloPageModule)
  },
  {
    path: 'control-vistas',
    loadChildren: () => import('./pages/control-vistas/control-vistas.module').then( m => m.ControlVistasPageModule)
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./pages/estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
  },
  {
    path: 'archivos',
    loadChildren: () => import('./pages/archivos/archivos.module').then( m => m.ArchivosPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./pages/roles/roles.module').then( m => m.RolesPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
