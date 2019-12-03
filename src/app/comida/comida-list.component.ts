import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng";
import {Title} from "@angular/platform-browser";
import {ListComponent} from "../component/list.component";
import {Ingrediente} from "../ingrediente/ingrediente";
import {Comida} from "./comida";
import {ComidaService} from "../service/comida.service";

@Component({
  selector: 'app-comida-list',
  templateUrl: './comida-list.component.html',
  styleUrls: ['./comida-list.component.scss']
})
export class ComidaListComponent  extends ListComponent<Comida>  implements OnInit {

  constructor(private comidaService: ComidaService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private titleService: Title) {
    super();
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'ingredientes', header: 'Ingrediente'},
      {field: 'inativo', header: 'Status'},
    ];

  }

  ngOnInit() {
    this.titleService.setTitle('Lista de Ingredientes');
  }

  carregarLista(): void {
    this.loading = true;
    this.comidaService.findAll().subscribe(res => {
      this.lista = res;
      setTimeout(() => this.loading = false);
    });
  }

  excluir(id: number): void {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja excluir esse ingrediente?',
      accept: () => this.deletar(id),
      acceptLabel: 'SIM',
      rejectLabel: 'NÃO',
    });
  }

  private deletar(id: number): void {
    this.loading = true;
    this.comidaService.delete(id).subscribe(() => {
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


}
