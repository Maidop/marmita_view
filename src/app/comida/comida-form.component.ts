import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComidaService} from '../service/comida.service';
import {MessageService, SelectItem} from 'primeng';
import {Comida} from './comida';
import {Ingrediente} from '../ingrediente/ingrediente';
import {IngredienteService} from '../service/ingrediente.service';
import {ComidaIngrediente} from './comidaIngrediente';
import {TipoComida} from '../tipo-comida/tipo-comida';
import {Tipo} from './tipo';
import {TipoComidaService} from '../service/tipo-comida.service';



@Component({
  selector: 'app-comida-form',
  templateUrl: './comida-form.component.html',
  styleUrls: ['./comida-form.component.scss']
})
export class ComidaFormComponent implements OnInit {

  objeto: Comida;
  ingredienteList: Ingrediente[];
  selectedIngredientes1: Ingrediente[] = [];
  tipoComida: TipoComida[];
  selectedTipo1: Tipo;

  constructor(private activatedRoute: ActivatedRoute,
              private comidaService: ComidaService,
              private router: Router,
              private messageService: MessageService,
              private ingredienteService: IngredienteService,
              private tipoComidaService: TipoComidaService) {
    this.ingredienteService.findAll().subscribe(res => {
      this.ingredienteList = res;
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        this.comidaService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto = res;
          this.selectedIngredientes1 = [];
          for (const comidaIngrediente of this.objeto.ingredientesList) {
            this.selectedIngredientes1.push(comidaIngrediente.ingrediente);
          }
        });
      } else {
        this.resetaForm();
      }
      this.tipoComidaService.findAll().subscribe(res => this.tipoComida = res);
    });
  }

  salvar(): void {
    this.objeto.ingredientesList = [];
    for (const ingrediente of this.selectedIngredientes1) {
      const comidaIngrediente = new ComidaIngrediente();
      comidaIngrediente.ingrediente = ingrediente;
      this.objeto.ingredientesList.push(comidaIngrediente);
    }
    this.comidaService.save(this.objeto).subscribe(res => {
      this.objeto = res;

      this.messageService.add({
        severity: 'success',
        summary: 'Salvo com sucesso!'
      });

      this.router.navigateByUrl('comida');
    }, erro => {
      this.messageService.add({
        severity: 'error',
        summary: erro.error.message
      });
    });
  }

  private resetaForm(): void {
    this.objeto = new Comida();
  }

}

