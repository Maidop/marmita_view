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

  constructor(private sidebarService: SidebarService,
              private http: HttpClient) {
    this.menuList = [
      {
        label: 'Início',
        routerLink: '/inicio',
        icon: 'pi pi-home'
      },
      {
        label: 'Pedido',
        icon: '',
        items: [
          {
            label: 'Cliente',
            routerLink: '/cliente',
            icon: '',
          },
          {
            label: 'Tamanhos do pedido',
            routerLink: 'tamanho',
            icon: ''
          }
        ]
      },
      {
        label: 'Marmita',
        icon: '',
        items: [
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
            label: 'Tipos de comida',
            routerLink: '/tipo-comida',
          },
        ]
      },
      {
        label: 'cardapio teste',
        routerLink: '/cardapio',
        icon: '',
      },
    ];
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("Authorization");
  }
}
