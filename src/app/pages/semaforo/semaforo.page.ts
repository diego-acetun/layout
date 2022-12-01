import { Component, OnInit } from '@angular/core';
import { ToggleMenuService } from 'src/app/services/toggle-menu.service';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.page.html',
  styleUrls: ['./semaforo.page.scss'],
})
export class SemaforoPage implements OnInit {
  constructor(private toggleService: ToggleMenuService) {}

  ngOnInit() {}

  openMenu() {
    this.toggleService.setMenu();
  }
}
