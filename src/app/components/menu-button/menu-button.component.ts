import { Component, OnInit } from '@angular/core';
import { ToggleMenuService } from 'src/app/services/toggle-menu.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {
  constructor(public toggleMenuService: ToggleMenuService) {}

  ngOnInit() {}
  openMenu() {
    console.log('clcked');
    this.toggleMenuService.setMenu();
  }

  getToggleMenu() {
    console.log('tt', this.toggleMenuService.menuValue);
  }
}