import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menuItems = [
    { title: 'home', path: '/', icon: 'accessibility-outline' },
    { title: 'about', path: '/about', icon: 'accessibility-outline' },
    { title: 'products', path: '/products', icon: 'accessibility-outline' },
  ];
  constructor(private menuControler: MenuController) {}

  ngOnInit() {}
}
