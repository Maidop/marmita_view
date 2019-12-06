import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  logout() {
    localStorage.removeItem("Authorization");
    this.deslogar.emit(false);
  }
}
