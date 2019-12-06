import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Login} from "../login/login";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<Login>{

  constructor(protected http: HttpClient) {
    super(http, 'login');
  }

  loggin(username: string, password: string): Observable<String> {
    const login = {
      "username": username,
      "password": password
    };

    return this.http.post(`${environment.api_url}login`, login, {responseType: "text"});
  }

}
