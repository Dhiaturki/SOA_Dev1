import { Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';

export const routes: Routes = [

    {path: "films", component : FilmsComponent} ,
    {path: "add-film", component : AddFilmComponent} ,
    {path:"",redirectTo:"films",pathMatch:"full"}

];
