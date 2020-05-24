import { Dobavljac } from './dobavljac.model';

export class Porudzbina {
  id: number;
  datum: Date;
  isporuceno: Date;
  iznos: number;
  placeno: boolean;
  dobavljac: Dobavljac;
}
