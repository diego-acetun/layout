import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss'],
})
export class MainLoginComponent implements OnInit {
  constructor() {}
  inputType: string = 'password';
  icon: string = 'eye-off-outline';
  ngOnInit() {}
  changeInputType() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
    this.icon =
      this.inputType === 'password' ? 'eye-off-outline' : 'eye-outline';
  }

  login() {
    console.log('login');
  }
}
