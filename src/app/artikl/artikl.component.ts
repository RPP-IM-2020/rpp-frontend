import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artikl } from '../models/artikl.model';
import { ArtiklService } from '../services/artikl.service';

@Component({
  selector: 'app-artikl',
  templateUrl: './artikl.component.html',
  styleUrls: ['./artikl.component.css']
})
export class ArtiklComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'proizvodjac', 'actions'];
  dataSource: Observable<Artikl[]>;
  database: ArtiklService | null;

  constructor(public httpClient: HttpClient, public artiklService: ArtiklService) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.dataSource = this.artiklService.getAllArtikl();
  }

}