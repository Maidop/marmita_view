import {ComidaIngrediente} from './comidaIngrediente';

export class Comida {
  id: number;
  comida: string;
  ingredientesList: ComidaIngrediente[];
  inativo: boolean;
  tipoComida: string;
}
