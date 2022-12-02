import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchivosPageRoutingModule } from './archivos-routing.module';

import { ArchivosPage } from './archivos.page';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchivosPageRoutingModule,
    MenuButtonModule,
  ],
  declarations: [ArchivosPage],
})
export class ArchivosPageModule {}
