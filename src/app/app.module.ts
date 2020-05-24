import { PorudzbinaService } from './services/porudzbina.service';
import { DobavljacService } from 'src/app/services/dobavljac.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoziloComponent } from './vozilo/vozilo.component';
import { AutomobilComponent } from './vozilo/automobil/automobil.component';
import { ArtiklComponent } from './artikl/artikl.component';
import { DobavljacComponent } from './dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './porudzbina/porudzbina.component';
import { StavkaPorudzbineComponent } from './stavka-porudzbine/stavka-porudzbine.component';
import { HomeComponent } from './core/home/home.component';
import { AuthorComponent } from './core/author/author.component';
import { AboutComponent } from './core/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtiklService } from './services/artikl.service';
import { ArtiklDialogComponent } from './dialog/artikl-dialog/artikl-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { DobavljacDialogComponent } from './dialog/dobavljac-dialog/dobavljac-dialog.component';
import { PorudzbinaDialogComponent } from './dialog/porudzbina-dialog/porudzbina-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { StavkaPorudzbineDialogComponent } from './dialog/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component';
import { StavkaPorudzbineService } from './services/stavka-porudzbine.service';

const Routes = [{path: 'artikl', component: ArtiklComponent},
                {path: 'dobavljac', component: DobavljacComponent},
                {path: 'porudzbina', component: PorudzbinaComponent},
                {path: 'stavkaPorudzbine', component: StavkaPorudzbineComponent},
                {path: 'home', component: HomeComponent},
                {path: 'about', component: AboutComponent},
                {path: 'author', component: AuthorComponent},
                {path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    ArtiklComponent,
    DobavljacComponent,
    PorudzbinaComponent,
    StavkaPorudzbineComponent,
    HomeComponent,
    AuthorComponent,
    AboutComponent,
    ArtiklDialogComponent,
    DobavljacDialogComponent,
    PorudzbinaDialogComponent,
    StavkaPorudzbineDialogComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
              ArtiklService,
              DobavljacService,
              PorudzbinaService,
              StavkaPorudzbineService],

  bootstrap: [AppComponent]
})
export class AppModule { }
