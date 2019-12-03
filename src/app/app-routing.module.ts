import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {IngredienteListComponent} from './ingrediente/ingrediente-list.component';
import {IngredienteFormComponent} from './ingrediente/ingrediente-form.component';
import {ClienteListComponent} from './cliente/cliente-list.component';
import {ClienteFormComponent} from './cliente/cliente-form.component';


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
    path: 'cliente', component: ClienteListComponent
  },
  {
    path: 'cliente/form', component: ClienteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
