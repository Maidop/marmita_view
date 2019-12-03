import {Component, OnInit} from '@angular/core';
import {SidebarService} from './service/sidebar.service';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'marmitex';
  displaySidebar: boolean;
  menuList: MenuItem[];

  constructor(private sidebarService: SidebarService) {
    this.menuList = [
      {
        label: 'Início',
        routerLink: '/',
        icon: 'pi pi-home'
      },
        {
          label: 'Cadastros',  //routerLink: '/ingrediente',
          icon: '',
          items:[
            {
              label: 'Ingredientes',
              routerLink: '/ingrediente',
              icon: '',
            },
            {
              label: 'Comidas',
              routerLink: '/comida',
            },
            {
              label: 'Cliente',
              routerLink: '/cliente',
              icon: '',
            }
        ]
      }
    ];
  }

  ngOnInit(): void {
  }

  abrirFecharMenu() {
    this.sidebarService.setMostrar(!this.displaySidebar);
  }

}
