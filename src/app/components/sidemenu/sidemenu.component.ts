import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleMenuService } from 'src/app/services/toggle-menu.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  @Input() isAuth: boolean | undefined;
  collapse: boolean = false;
  currentPage: any;
  public appPages = [
    { title: 'Semáforo cooporativo', url: '/semaforo', icon: 'people' },
    { title: 'Reportes O&M', url: '/reportes', icon: 'paper-plane' },
    // { title: 'Empresas', url: '/business', icon: 'business' },
  ];
  constructor(
    public router: Router,
    public toggleMenuService: ToggleMenuService
  ) {}

  ngOnInit() {}

  selectPage(p: any) {
    this.currentPage = p;
    this.router.navigate([p.url]);
  }
}
