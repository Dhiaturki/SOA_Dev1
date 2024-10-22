import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { FilmsComponent } from './films/films.component';
import { UpdateFilmComponent } from './update-film/update-film.component';

export const routes: Routes = [
  { path: 'films', component: FilmsComponent },
  { path: 'add-film', component: AddFilmComponent },
  { path: 'update-film/:id', component: UpdateFilmComponent },  // Adjusted path to be consistent
  { path: '', redirectTo: 'films', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Import RouterModule with routes
  exports: [RouterModule]  // Export RouterModule to make it available across the app
})
export class AppRoutingModule {}
