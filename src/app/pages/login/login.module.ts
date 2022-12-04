import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { MainLoginComponent } from 'src/app/pages/login/components/main-login/main-login.component';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoginPageRoutingModule],
  declarations: [LoginPage, MainLoginComponent],
})
export class LoginPageModule {}
