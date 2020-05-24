import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { StavkaPorudzbine } from '../models/stavka-porudzbine.model';
import { StavkaPorudzbineService } from '../services/stavka-porudzbine.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Artikl } from '../models/artikl.model';
import { Porudzbina } from '../models/porudzbina.model';
import { StavkaPorudzbineDialogComponent } from '../dialog/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stavka-porudzbine',
  templateUrl: './stavka-porudzbine.component.html',
  styleUrls: ['./stavka-porudzbine.component.css']
})
export class StavkaPorudzbineComponent implements OnInit {

  displayedColumns = ['id', 'redniBroj', 'jedinicaMere', 'kolicina', 'cena', 'artikl', 'porudzbina', 'actions'];
  //dataSource: Observable<StavkaPorudzbine[]>;
  dataSource: MatTableDataSource<StavkaPorudzbine>;
  database: StavkaPorudzbineService | null;
  currentDate = new Date();

  @Input()
  selektovanaPorudzbina: Porudzbina;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(public httpClient: HttpClient,
              public stavkaPorudzbineService: StavkaPorudzbineService,
              public dialog: MatDialog) { }

  public openDialog(flag: number, id: number, redniBroj: number, jedinicaMere: number, kolicina: number, cena: number, artikl: Artikl, porudzbina: Porudzbina) {
    const dialogRef = this.dialog.open(StavkaPorudzbineDialogComponent, { data: { id: id, redniBroj: redniBroj, jedinicaMere: jedinicaMere, kolicina: kolicina, cena: cena, artikl: artikl, porudzbina: porudzbina } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges() {
    if (this.selektovanaPorudzbina.id) {
      this.loadData();
    }
  }

  public loadData() {
    this.stavkaPorudzbineService.getStavkaZaPorudzbinu(this.selektovanaPorudzbina.id).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch (property) {
          case 'id': return data[property];
          case 'redniBroj': return data[property];
          case 'kolicina': return data[property];
          case 'cena': return data[property];
          case 'porudzbina': return data[property];
          case 'artikl': return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
