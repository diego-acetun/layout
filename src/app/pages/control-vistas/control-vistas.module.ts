import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlVistasPageRoutingModule } from './control-vistas-routing.module';

import { ControlVistasPage } from './control-vistas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlVistasPageRoutingModule
  ],
  declarations: [ControlVistasPage]
})
export class ControlVistasPageModule {}
