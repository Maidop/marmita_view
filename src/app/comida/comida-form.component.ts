import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComidaService} from '../service/comida.service';
import {MessageService} from 'primeng';
import {Comida} from './comida';
import {Ingrediente} from '../ingrediente/ingrediente';
import {TipoComida} from './tipoComida';
import {Tipo} from '../tipo-comida/tipo';
import {IngredienteService} from '../service/ingrediente.service';
import {TipoComidaService} from '../service/tipo-comida.service';
import {ComidaIngrediente} from './comidaIngrediente';


@Component({
  selector: 'app-comida-form',
  templateUrl: './comida-form.component.html',
  styleUrls: []
})
export class ComidaFormComponent implements OnInit {

  objeto: Comida;
  objeto2: TipoComida;
  ingredienteList: Ingrediente[];
  selectedIngredientes1: Ingrediente[] = [];
  tipoList: TipoComida[];
  selectedTipos1: Tipo[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private comidaService: ComidaService,
              private router: Router,
              private messageService: MessageService,
              private ingredienteService: IngredienteService,
              private tipoComidaService: TipoComidaService) {
    this.ingredienteService.findAll().subscribe(res => {
      this.ingredienteList = res;
    });
    this.tipoComidaService.findAll().subscribe(res => {
      this.tipoList = res;
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

        this.tipoComidaService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto2 = res;
          this.selectedTipos1 = [];
          for (const comidaTipo of this.objeto.tipoList) {
            this.selectedTipos1.push(comidaTipo.tipo);
          }
        });

      } else {
        this.resetaForm();
      }
    });
  }

  salvar(): void {
    this.objeto.ingredientesList = [];
    for (const ingrediente of this.selectedIngredientes1) {
      const comidaIngrediente = new ComidaIngrediente();
      comidaIngrediente.ingrediente = ingrediente;
      this.objeto.ingredientesList.push(comidaIngrediente);
    }
    for (const tipo of this.selectedTipos1) {
      const comidaTipo = new TipoComida();
      comidaTipo.tipo = tipo;
      this.objeto.tipoList.push(comidaTipo);
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

