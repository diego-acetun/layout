import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleMenuService } from 'src/app/services/toggle-menu/toggle-menu.service';
import { ShowSectionNameService } from 'src/app/services/show-section-name/show-section-name.service';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  @Input() isAuth: boolean | undefined;
  collapse: boolean = false;
  currentPage: any;
  accordionValue: string = '';
  public appPages = [
    { title: 'Semáforo cooporativo', url: '/semaforo', icon: 'book-outline' },
    { title: 'Reportes O&M', url: '/reportes', icon: 'briefcase-outline' },
    // { title: 'Empresas', url: '/business', icon: 'business' },
  ];

  administrativeReports = [
    {
      title: 'Control de desarrollo',
      url: '/control-desarrollo',
    },
    {
      title: 'Control de vistas',
      url: '/control-vistas',
    },
    {
      title: 'Estadisticas de tablas',
      url: '/estadisticas',
    },
    {
      title: 'Traducción de archivos',
      url: '/archivos',
    },
  ];
  administrativeManagement = [
    {
      title: 'Usuarios',
      url: '/usuarios',
    },
    {
      title: 'Roles',
      url: '/roles',
    },
    {
      title: 'Categorias',
      url: '/categorias',
    },
  ];

  constructor(
    public router: Router,
    public toggleMenuService: ToggleMenuService,
    public showSectionNameService: ShowSectionNameService
  ) {}

  ngOnInit() {}

  selectPage(p: any) {
    this.currentPage = p;
    this.router.navigate([p.url]);
  }

  showAccordion(accordionValue: string) {
    this.accordionValue = '';
    this.toggleMenuService.setMenu();
    this.accordionValue = accordionValue;
    // console.log('click');
  }

  hoverIcon(option: string) {
    if (option === 'Semáforo cooporativo') {
      this.showSectionNameService.setMessageSemaforo();
    } else if (option === 'Reportes O&M') {
      this.showSectionNameService.setMessageReports();
    } else if (option === 'Reportes administrativos') {
      // console.log('jdejj');
      this.showSectionNameService.setMessageAdministrativeReports();
    } else if (option === 'Gestion administrativa') {
      this.showSectionNameService.setMessageManagementReports();
    }
  }

  // leaveIcon(){

  // }
}
