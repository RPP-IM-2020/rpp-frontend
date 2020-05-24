import { Artikl } from './artikl.model';
import { Porudzbina } from './porudzbina.model';

export class StavkaPorudzbine {
  id: number;
  cena: number;
  jedinicaMere: string;
  kolicina: number;
  redniBroj: number;
  artikl: Artikl;
  porudzbina: Porudzbina;
}
