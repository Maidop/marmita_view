import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from "../service/login.service";
import {Login} from "./login";
import {HttpRequestInterceptor} from "../config/http-request.interceptor";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  @Input() displayItem = false; // Input, para dar acesso a outro component
  @Output() onClose = new EventEmitter<void>();
  titulo: "Login";

  login: Login;

  constructor( private loginService: LoginService) {
    this.login = new Login();
  }

  logar(): void{
    this.loginService.save(this.login).subscribe();
  }
}
