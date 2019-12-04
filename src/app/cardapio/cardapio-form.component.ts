import { Component, OnInit } from '@angular/core';
import {CardapioService} from "../service/cardapio.service";
import {Cardapio} from "./Cardapio";

@Component({
  selector: 'app-cardapio-form',
  templateUrl: './cardapio-form.component.html',
  styleUrls: ['./cardapio-form.component.scss']
})
export class CardapioFormComponent {

  private cardapio: Cardapio;

  constructor(private cardapioService: CardapioService) {
    this.cardapio = new Cardapio();
  }

  salvar() {
    this.cardapioService.save(this.cardapio).subscribe( res => this.cardapio = res);
  }
}
