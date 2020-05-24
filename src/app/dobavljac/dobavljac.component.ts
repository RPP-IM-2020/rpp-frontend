import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Dobavljac } from '../models/dobavljac.model';
import { DobavljacService } from '../services/dobavljac.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DobavljacDialogComponent } from '../dialog/dobavljac-dialog/dobavljac-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dobavljac',
  templateUrl: './dobavljac.component.html',
  styleUrls: ['./dobavljac.component.css']
})
export class DobavljacComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'kontakt', 'adresa', 'actions'];
  //dataSource: Observable<Dobavljac[]>;
  dataSource: MatTableDataSource<Dobavljac>;
  database: DobavljacService | null;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(public httpClient: HttpClient,
              public dobavljacService: DobavljacService,
              public dialog: MatDialog) { }

  public openDialog(flag: number, id: number, naziv: string, kontakt: string, adresa: string) {
    const dialogRef = this.dialog.open(DobavljacDialogComponent, { data: { id: id, naziv: naziv, kontakt: kontakt, adresa: adresa } });
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
    this.dobavljacService.getAllDobavljac().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch (property) {
          case 'id': return data[property];
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
