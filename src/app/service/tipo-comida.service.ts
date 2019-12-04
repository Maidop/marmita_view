import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {TipoComida} from "../tipo-comida/tipo-comida";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TipoComidaService extends BaseService<TipoComida> {

  constructor(protected http: HttpClient) {
    super(http, 'tipo-comida');
  }
}
