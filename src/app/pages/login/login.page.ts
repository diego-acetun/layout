import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  inputType: string = 'password';
  icon: string = 'eye-off-outline';
  constructor() {
  }

  ngOnInit() {}
  changeInputType() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
    this.icon =
      this.inputType === 'password' ? 'eye-outline' : 'eye-off-outline';
  }

  login() {
    console.log('login');
  }
}
