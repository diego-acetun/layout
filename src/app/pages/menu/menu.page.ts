import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public appPages = [
    { title: 'Semáforo coorporativo', url: '/users', icon: 'copy-outline' },
    {
      title: 'Create User',
      url: '/users/create-user',
      icon: 'person-add-outline',
    },
  ];
  public logOutDetails = {
    title: 'Logout',
    url: '/login',
    icon: 'log-out-outline',
  };
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  ngOnInit() {}
}
