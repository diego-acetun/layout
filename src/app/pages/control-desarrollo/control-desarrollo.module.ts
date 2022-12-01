import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlDesarrolloPageRoutingModule } from './control-desarrollo-routing.module';

import { ControlDesarrolloPage } from './control-desarrollo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlDesarrolloPageRoutingModule
  ],
  declarations: [ControlDesarrolloPage]
})
export class ControlDesarrolloPageModule {}
