import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {SidebarService} from './service/sidebar.service';
import {MenuItem} from 'primeng';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./service/login.service";
import {Login} from "./login/login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: any;
  usuarioEstaLogado: boolean = false;
  title = 'marmitex';
  menuList: MenuItem[];
  @Output() deslogar: EventEmitter<boolean> = new EventEmitter();
  login: Login;
  display: boolean = false;

  constructor(private sidebarService: SidebarService,
              private http: HttpClient,
              private loginService: LoginService) {
    this.login = new Login();
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
    this.subscription = this.loginService.getLogado().subscribe( logado => {
      this.usuarioEstaLogado = logado
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //this.subscription
  }

  logout() {
    localStorage.removeItem("Authorization");
    this.loginService.changeLogado(false);
  }

  autenticar(): void{
    const username = this.login.cpf;
    const senha = this.login.senha;
    this.loginService.login(username, senha).subscribe(res => {
      localStorage.setItem('Authorization', res);
      this.loginService.changeLogado(true);
      this.display = false;
    });
  }

  showDialog() {
    this.display = true;
  }
}
