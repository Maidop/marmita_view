import { Component, OnInit } from '@angular/core';
import {CardapioService} from "../service/cardapio.service";
import {ListComponent} from "../component/list.component";
import {Cliente} from "../cliente/cliente";
import {Cardapio} from "./Cardapio";
import {Title} from "@angular/platform-browser";
import {MessageService} from "primeng";

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio-list.component.html',
  styleUrls: ['./cardapio-list.component.scss']
})
export class CardapioListComponent extends ListComponent<Cardapio> implements OnInit {

  constructor(private cardapioService: CardapioService,
              private messageService: MessageService) {
    super();
    this.cols = [{header: 'ID' }, {header: 'Nome do Cardapio' }, {header: 'Status Cardapio' }];
    this.carregarLista();
  }

  ngOnInit() {
    this.loading = true;
    this.cardapioService.findAll().subscribe( res => this.lista = res);
  }

  carregarLista(): void {
    this.cardapioService.findAll().subscribe( res => this.lista = res);
  }

  private deletar(id: number): void {
    this.loading = true;
    this.cardapioService.delete(id).subscribe(() => {
      this.carregarLista();

      this.messageService.add({
        severity: 'success',
        summary: 'Deletado com sucesso!'
      });
      setTimeout(() => this.loading = false);
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: error.error.message
      });
      setTimeout(() => this.loading = false);
    });
  }

  excluir(id: number): void {
    this.cardapioService.delete(id).subscribe();
  }
}
