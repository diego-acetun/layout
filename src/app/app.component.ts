import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
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
}
