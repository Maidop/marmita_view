import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {IngredienteListComponent} from './ingrediente/ingrediente-list.component';
import {IngredienteFormComponent} from './ingrediente/ingrediente-form.component';
import {ComidaListComponent} from "./comida/comida-list.component";
import {ComidaFormComponent} from "./comida/comida-form.component";
import {ClienteListComponent} from "./cliente/cliente-list.component";
import {ClienteFormComponent} from "./cliente/cliente-form.component";
import {CardapioComponent} from "./cardapio/cardapio.component";
import {CardapioFormComponent} from "./cardapio/cardapio-form/cardapio-form.component";


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
    path: 'cardapio', component: CardapioComponent
  },
  {
    path: 'cardapio/form', component: CardapioFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
