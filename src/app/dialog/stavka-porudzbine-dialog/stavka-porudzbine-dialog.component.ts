import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StavkaPorudzbineService } from 'src/app/services/stavka-porudzbine.service';
import { StavkaPorudzbine } from 'src/app/models/stavka-porudzbine.model';
import { Artikl } from 'src/app/models/artikl.model';
import { Porudzbina } from 'src/app/models/porudzbina.model';
import { ArtiklService } from 'src/app/services/artikl.service';
import { PorudzbinaService } from 'src/app/services/porudzbina.service';

@Component({
  selector: 'app-stavkaPorudzbine-dialog',
  templateUrl: './stavka-porudzbine-dialog.component.html',
  styleUrls: ['./stavka-porudzbine-dialog.component.css']
})
export class StavkaPorudzbineDialogComponent implements OnInit {
  artikli: Artikl[];
  porudzbine: Porudzbina[];

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<StavkaPorudzbineDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: StavkaPorudzbine,
              public stavkaPorudzbineService: StavkaPorudzbineService,
              public artiklService: ArtiklService,
              public porudzbinaService: PorudzbinaService) {
              }

  public add(): void {
    this.stavkaPorudzbineService.addStavkaPorudzbine(this.data);
    this.snackBar.open('Uspešno dodata stavka porudzbine za porudžbinu: ' + this.data.porudzbina.id, 'Uredu',
    {duration: 3000});
  }

  public update(): void {
    this.stavkaPorudzbineService.updateStavkaPorudzbine(this.data);
    this.snackBar.open('Uspešno izmenjena stavka porudzbine: ' + this.data.id, 'Uredu',
    {duration: 3000});
  }

  public delete(): void {
    this.stavkaPorudzbineService.deleteStavkaPorudzbine(this.data.id);
    this.snackBar.open('Uspešno obrisana stavka porudzbine: ' + this.data.id, 'Uredu',
    {duration: 3000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Uredu',
    {duration: 2000});
  }

  ngOnInit(): void {
    this.artiklService.getAllArtikl().subscribe(artikli =>
    this.artikli = artikli);
    this.porudzbinaService.getAllPorudzbina().subscribe(porudzbine =>
    this.porudzbine = porudzbine);
  }

  compareTo(a, b) {
    return a.id === b.id;
  }

}
