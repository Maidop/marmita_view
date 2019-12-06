import {Component} from '@angular/core';
import {LoginService} from "../service/login.service";
import {Login} from "./login";

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

  logar(): void{
    const username = this.login.cpf;
    const senha = this.login.senha;
    this.loginService.login(username, senha).subscribe(res => {
      localStorage.setItem('Authorization', res);
    });
  }
}
