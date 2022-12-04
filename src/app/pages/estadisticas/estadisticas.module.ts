import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticasPageRoutingModule } from './estadisticas-routing.module';

import { EstadisticasPage } from './estadisticas.page';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticasPageRoutingModule,
    MenuButtonModule,
  ],
  declarations: [EstadisticasPage],
})
export class EstadisticasPageModule {}
