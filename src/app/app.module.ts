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
import { FormsModule } from '@angular/forms';
import { DobavljacDialogComponent } from './dialog/dobavljac-dialog/dobavljac-dialog.component';

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
    DobavljacDialogComponent
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
    RouterModule.forRoot(Routes)
  ],
  providers: [ArtiklService, DobavljacService],

  bootstrap: [AppComponent]
})
export class AppModule { }
