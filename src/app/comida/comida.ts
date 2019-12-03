import {Ingrediente} from '../ingrediente/ingrediente';

export class Comida {
  id: number;
  comida: string;
  ingredientesList: Ingrediente[];
  inativo: boolean;
}
