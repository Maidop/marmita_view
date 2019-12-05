import {Component, OnInit} from '@angular/core';
import {SidebarService} from './service/sidebar.service';
import {MenuItem} from 'primeng';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'marmitex';
  menuList: MenuItem[];
  displayItem = false;

  constructor(private sidebarService: SidebarService,
              private http: HttpClient) {
    this.menuList = [
      {
        label: 'Início',
        routerLink: '/',
        icon: 'pi pi-home'
      },
        {
          label: 'Cadastros',
          icon: '',
          items: [
            {
              label: 'Ingredientes',
              routerLink: '/ingrediente',
              icon: '',
            },
            {
              label: 'Tipo de Comida',
              routerLink: '/tipo-comida',
            },
            {
              label: 'Comidas',
              routerLink: '/comida',
            },
            {
              label: 'Cliente',
              routerLink: '/cliente',
              icon: '',
            },
            {
              label: 'Cardapio',
              routerLink: '/cardapio',
              icon: '',
            },
            {
              label: 'Tamanhos',
              routerLink: 'tamanho',
              icon: ''
            }
        ]
      }
    ];
  }

  ngOnInit(): void {
  }

  openModalItem() {
    this.displayItem = true;
  }
}
