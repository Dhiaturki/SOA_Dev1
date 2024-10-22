import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { AppRoutingModule } from './app.routes'; // Your routing module

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    AddFilmComponent,
    UpdateFilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule, 
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
