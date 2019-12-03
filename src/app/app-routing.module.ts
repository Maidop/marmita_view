import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {IngredienteListComponent} from './ingrediente/ingrediente-list.component';
import {IngredienteFormComponent} from './ingrediente/ingrediente-form.component';
import {ComidaFormComponent} from "./comida/comida-form.component";
import {ComidaListComponent} from "./comida/comida-list.component";


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
