import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from "../service/login.service";
import {Login} from "./login";
import {HttpRequestInterceptor} from "../config/http-request.interceptor";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
