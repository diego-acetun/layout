import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemaforoPageRoutingModule } from './semaforo-routing.module';

import { SemaforoPage } from './semaforo.page';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemaforoPageRoutingModule,
    MenuButtonModule,
  ],
  declarations: [SemaforoPage],
})
export class SemaforoPageModule {}
