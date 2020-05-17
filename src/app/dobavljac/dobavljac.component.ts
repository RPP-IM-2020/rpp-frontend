import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dobavljac } from '../models/dobavljac.model';
import { DobavljacService } from '../services/dobavljac.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DobavljacDialogComponent } from '../dialog/dobavljac-dialog/dobavljac-dialog.component';

@Component({
  selector: 'app-dobavljac',
  templateUrl: './dobavljac.component.html',
  styleUrls: ['./dobavljac.component.css']
})
export class DobavljacComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'kontakt', 'adresa', 'actions'];
  dataSource: Observable<Dobavljac[]>;
  database: DobavljacService | null;

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

  public loadData(){
    this.dataSource = this.dobavljacService.getAllDobavljac();
  }

}
