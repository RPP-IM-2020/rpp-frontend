import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Dobavljac } from '../models/dobavljac.model';

@Injectable()
export class DobavljacService {

  /* Development */
  /* private readonly API_URL = 'http://localhost:8083/dobavljac/'; */
  /* Production */
  private readonly API_URL = 'https://rpp-backend.herokuapp.com/dobavljac/';

  dataChange: BehaviorSubject<Dobavljac[]> = new BehaviorSubject<Dobavljac[]>([]);

  constructor(private httpClient: HttpClient){

  }

  public getAllDobavljac(): Observable<Dobavljac[]>{
    this.httpClient.get<Dobavljac[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });

    return this.dataChange.asObservable();

  }

  public addDobavljac(dobavljac: Dobavljac): void {
    this.httpClient.post(this.API_URL, dobavljac).subscribe();
  }

  public updateDobavljac(dobavljac: Dobavljac): void {
    this.httpClient.put(this.API_URL + dobavljac.id, dobavljac).subscribe();
  }

  public deleteDobavljac(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }

}
