import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Porudzbina } from '../models/porudzbina.model';
import { PorudzbinaService } from '../services/porudzbina.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PorudzbinaDialogComponent } from '../dialog/porudzbina-dialog/porudzbina-dialog.component';
import { Dobavljac } from '../models/dobavljac.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-porudzbina',
  templateUrl: './porudzbina.component.html',
  styleUrls: ['./porudzbina.component.css']
})
export class PorudzbinaComponent implements OnInit {

  displayedColumns = ['id', 'datum', 'isporuceno', 'iznos', 'placeno', 'dobavljac', 'actions'];
  //dataSource: Observable<Porudzbina[]>;
  dataSource: MatTableDataSource<Porudzbina>;
  database: PorudzbinaService | null;
  currentDate = new Date();

  selektovanaPorudzbina: Porudzbina;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(public httpClient: HttpClient,
              public porudzbinaService: PorudzbinaService,
              public dialog: MatDialog) { }

  public openDialog(flag: number, id: number, datum: Date, isporuceno: Date, iznos: string, placeno: boolean, dobavljac: Dobavljac) {
    const dialogRef = this.dialog.open(PorudzbinaDialogComponent, { data: { id: id, datum: new Date(datum), isporuceno: new Date(isporuceno), iznos: iznos, placeno: placeno, dobavljac: dobavljac } });
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

  public loadData() {
    this.porudzbinaService.getAllPorudzbina().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch (property) {
          case 'id': return data[property];
          case 'iznos': return data[property];
          case 'placeno': return data[property];
          case 'dobavljac': return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public selectRow(row) {
    this.selektovanaPorudzbina = row;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
