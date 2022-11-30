import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menuItems = [
    {
      title: 'Semáforo coorporativo',
      path: '/',
      icon: 'accessibility-outline',
    },
    { title: 'Reportes O&M', path: '/about', icon: 'accessibility-outline' },
    // { title: 'products', path: '/products', icon: 'accessibility-outline' },
  ];

  administrativeReports = [
    { title: 'Control de desarrollo', path: '/reports/control-desarrollo' },
    { title: 'Control de de vistas', path: '/reports/control-vistas' },
    { title: 'Estadísticas de tablas', path: '/reports/estadisticas-tablas' },
    { title: 'Traducción de archivos', path: '/reports/traduccion-archivos' },
  ];
  administrativeManagements = [
    { title: 'Usuarios', path: '/management/users' },
    { title: 'Roles', path: '/management/roles' },
    { title: 'Categorias', path: '/management/categories' },
  ];
  constructor(private menuControler: MenuController) {}

  ngOnInit() {}
}
