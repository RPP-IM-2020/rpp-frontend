import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DobavljacService } from 'src/app/services/dobavljac.service';

@Component({
  selector: 'app-dobavljac-dialog',
  templateUrl: './dobavljac-dialog.component.html',
  styleUrls: ['./dobavljac-dialog.component.css']
})
export class DobavljacDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<DobavljacDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: any,
              public dobavljacService: DobavljacService) { }

  public add(): void {
    this.dobavljacService.addDobavljac(this.data);
    this.snackBar.open('Uspešno dodat dobavljac: ' + this.data.naziv, 'Uredu', {
      duration: 3000
    });
  }

  public update(): void {
    this.dobavljacService.updateDobavljac(this.data);
    this.snackBar.open('Uspešno ažuriran dobavljac: ' + this.data.naziv, 'Uredu', {
      duration: 3000
    });
  }

  public delete(): void {
    this.dobavljacService.deleteDobavljac(this.data.id);
    this.snackBar.open('Uspešno obrisan dobavljac: ' + this.data.id, 'Uredu', {
      duration: 3000
    });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Uredu', {
      duration: 1000
    });
  }

  ngOnInit(): void {
  }

}
