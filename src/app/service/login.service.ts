import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Login} from "../login/login";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<Login>{

  constructor(protected http: HttpClient) {
    super(http, 'login');
  }
}
