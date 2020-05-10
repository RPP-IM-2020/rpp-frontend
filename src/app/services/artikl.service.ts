import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Artikl } from '../models/artikl.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ArtiklService {

  private readonly API_URL = 'http://localhost:8083/artikl/';

  dataChange: BehaviorSubject<Artikl[]> = new BehaviorSubject<Artikl[]>([]);

  constructor(private httpClient: HttpClient){

  }

  public getAllArtikl(): Observable<Artikl[]>{
    this.httpClient.get<Artikl[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });

    return this.dataChange.asObservable();

  }

}
