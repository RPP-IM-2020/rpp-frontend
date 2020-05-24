import { Injectable } from '@angular/core';
import { Porudzbina } from '../models/porudzbina.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PorudzbinaService {
  porudzbine: Porudzbina[];
  private readonly API_URL = 'http://localhost:8083/porudzbina/';
  dataChange: BehaviorSubject<Porudzbina[]> = new BehaviorSubject<Porudzbina[]>([]);

  constructor(private httpClient: HttpClient){

  }

  public getAllPorudzbina(): Observable<Porudzbina[]>{
    this.httpClient.get<Porudzbina[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
      this.porudzbine = data;
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + '' + error.message);
    });
    return this.dataChange.asObservable();

  }

  public addPorudzbina(porudzbina: Porudzbina): void {
    this.httpClient.post(this.API_URL, porudzbina).subscribe();
  }

  public updatePorudzbina(porudzbina: Porudzbina): void {
    this.httpClient.put(this.API_URL + porudzbina.id, porudzbina).subscribe();
  }

  public deletePorudzbina(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }

}
