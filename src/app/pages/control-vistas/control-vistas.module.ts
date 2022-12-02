import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlVistasPageRoutingModule } from './control-vistas-routing.module';

import { ControlVistasPage } from './control-vistas.page';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlVistasPageRoutingModule,
    MenuButtonModule
  ],
  declarations: [ControlVistasPage]
})
export class ControlVistasPageModule {}
