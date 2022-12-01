import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuButtonComponent } from './menu-button.component';
@NgModule({
  declarations: [MenuButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [MenuButtonComponent],
})
export class MenuButtonModule {}
