import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menuItems = [
    { title: 'Semáforo coorporativo', path: '/', icon: 'accessibility-outline' },
    { title: 'Reportes O&M', path: '/about', icon: 'accessibility-outline' },
    // { title: 'products', path: '/products', icon: 'accessibility-outline' },
  ];
  constructor(private menuControler: MenuController) {}

  ngOnInit() {}
}
