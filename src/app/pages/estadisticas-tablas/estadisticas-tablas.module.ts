import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticasTablasPageRoutingModule } from './estadisticas-tablas-routing.module';

import { EstadisticasTablasPage } from './estadisticas-tablas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticasTablasPageRoutingModule
  ],
  declarations: [EstadisticasTablasPage]
})
export class EstadisticasTablasPageModule {}
