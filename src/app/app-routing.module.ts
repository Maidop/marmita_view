import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {IngredienteListComponent} from './ingrediente/ingrediente-list.component';
import {IngredienteFormComponent} from './ingrediente/ingrediente-form.component';
import {ComidaListComponent} from "./comida/comida-list.component";
import {ComidaFormComponent} from "./comida/comida-form.component";
import {ClienteListComponent} from "./cliente/cliente-list.component";
import {ClienteFormComponent} from "./cliente/cliente-form.component";
import {CardapioListComponent} from "./cardapio/cardapio-list.component";
import {CardapioFormComponent} from "./cardapio/cardapio-form.component";
import {TamanhoFormComponent} from "./tamanho/tamanho-form.component";
import {TamanhoListComponent} from "./tamanho/tamanho-list.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'ingrediente', component: IngredienteListComponent
  },
  {
    path: 'ingrediente/form', component: IngredienteFormComponent
  },
  {
    path: 'comida', component: ComidaListComponent
  },
  {
    path: 'comida/form', component: ComidaFormComponent
  },
  {
    path: 'cliente', component: ClienteListComponent
  },
  {
    path: 'cliente/form', component: ClienteFormComponent
  },
  {
    path: 'cardapio', component: CardapioListComponent
  },
  {
    path: 'cardapio/form', component: CardapioFormComponent
  } ,
  {
    path: 'tamanho', component: TamanhoListComponent
  },
  {
    path: 'tamanho/form', component: TamanhoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
