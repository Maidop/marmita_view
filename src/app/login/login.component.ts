import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoginService} from "../service/login.service";
import {Login} from "./login";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent{
  @Input() displayItem = false; // Input, para dar acesso a outro component
  @Output() onClose = new EventEmitter<void>();
  titulo: "Login";

  login: Login;

  constructor( private loginService: LoginService,
               private httpCliente: HttpClient) {
    this.login = new Login();
  }

  logar(): void{
    const username = this.login.cpf;
    const senha = this.login.senha;
    this.httpCliente.post<any>("http://localhost:8080/login",
      { "username": username, "password": senha}).subscribe( data => {
      localStorage.setItem('Authorization', JSON.stringify(data));
    })
  }
}
