import { DobavljacService } from 'src/app/services/dobavljac.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PorudzbinaService } from 'src/app/services/porudzbina.service';
import { Dobavljac } from 'src/app/models/dobavljac.model';
import { Porudzbina } from 'src/app/models/porudzbina.model';

@Component({
  selector: 'app-porudzbina-dialog',
  templateUrl: './porudzbina-dialog.component.html',
  styleUrls: ['./porudzbina-dialog.component.css']
})
export class PorudzbinaDialogComponent implements OnInit {
  dobavljaci: Dobavljac[];

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<PorudzbinaDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: Porudzbina,
              public porudzbinaService: PorudzbinaService,
              public dobavljacService: DobavljacService) {
              }

  public add(): void {
    this.porudzbinaService.addPorudzbina(this.data);
    this.snackBar.open('Uspešno dodata porudzbina: ' + this.data.id, 'Uredu',
    {duration: 3000});
  }

  public update(): void {
    this.porudzbinaService.updatePorudzbina(this.data);
    this.snackBar.open('Uspešno izmenjena porudzbina: ' + this.data.id, 'Uredu',
    {duration: 3000});
  }

  public delete(): void {
    this.porudzbinaService.deletePorudzbina(this.data.id);
    this.snackBar.open('Uspešno obrisana porudzbina: ' + this.data.id, 'Uredu',
    {duration: 3000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Uredu',
    {duration: 2000});
  }

  ngOnInit(): void {
    this.dobavljacService.getAllDobavljac().subscribe(dobavljaci =>
    this.dobavljaci = dobavljaci);
  }

  compareTo(a, b) {
    return a.id === b.id;
  }

}
