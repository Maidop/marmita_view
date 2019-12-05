import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from '../service/login.service';
import {Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login;

  constructor( private loginService: LoginService) {
    this.login = new Login();
  }

  logar(): void {
    this.loginService.save(this.login).subscribe();
  }
}
