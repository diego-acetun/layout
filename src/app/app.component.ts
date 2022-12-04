import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isAuth: boolean | undefined;
  constructor() {
    // this.isAuth = this.authService.isAuthenticated;
  }
}
