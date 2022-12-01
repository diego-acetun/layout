import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemaforoPageRoutingModule } from './semaforo-routing.module';

import { SemaforoPage } from './semaforo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemaforoPageRoutingModule
  ],
  declarations: [SemaforoPage]
})
export class SemaforoPageModule {}
