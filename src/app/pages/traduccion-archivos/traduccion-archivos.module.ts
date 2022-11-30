import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraduccionArchivosPageRoutingModule } from './traduccion-archivos-routing.module';

import { TraduccionArchivosPage } from './traduccion-archivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraduccionArchivosPageRoutingModule
  ],
  declarations: [TraduccionArchivosPage]
})
export class TraduccionArchivosPageModule {}
