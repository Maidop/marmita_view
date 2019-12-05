import {Ingrediente} from '../ingrediente/ingrediente';
import {Comida} from './comida';
import {Tipo} from './tipo';

export class ComidaIngrediente {
  id: number;
  comida: Comida;
  ingrediente: Ingrediente;
}
