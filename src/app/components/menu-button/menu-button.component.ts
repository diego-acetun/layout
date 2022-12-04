import { Component, Input, OnInit } from '@angular/core';
import { ToggleMenuService } from 'src/app/services/toggle-menu/toggle-menu.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {
  @Input() title: string = 'default title';
  constructor(public toggleMenuService: ToggleMenuService) {}

  ngOnInit() {}
  openMenu() {
    this.toggleMenuService.setMenu();
  }
}
