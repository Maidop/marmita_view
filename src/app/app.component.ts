import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SidebarService} from './service/sidebar.service';
import {MenuItem} from 'primeng';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'marmitex';
  menuList: MenuItem[];
  @Output() deslogar: EventEmitter<boolean> = new EventEmitter();

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
        items: [
          {
            label: 'Clientes',
            routerLink: '/cliente',
          },
          {
            label: 'Pedidos',
            routerLink: '/pedido',
          },
          {
            label: 'Tamanhos do pedido',
            routerLink: 'tamanho',
          }
        ]
      },
      {
        label: 'Marmita',
        items: [
          {
            label: 'Ingredientes',
            routerLink: '/ingrediente',
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
      },
    ];
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('Authorization');
    this.deslogar.emit(false);
  }
}
