import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Film } from '../model/film.model';
import { Genre } from '../model/Genre';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styles: []
})
export class UpdateFilmComponent implements OnInit {
  currentFilm = new Film();
  genres!: Genre[];  // Define genres array to hold the list of genres
  updatedGenreId!: number;  // Variable to hold the updated genre ID

  constructor(
    private activatedroute: ActivatedRoute,
    private filmsservice: FilmService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.filmsservice.listeGnere().
    subscribe(genrs => {
      console.log(genrs);
      this.genres = genrs._embedded.genres;
    });
    this.filmsservice.consulterFilm(this.activatedroute.snapshot.params['id']).
    subscribe(film => {this.currentFilm = film ; 
      this.updatedGenreId= this.currentFilm.genre.id_genre
    })
  }

  updateFilm() {
    
    this.currentFilm.genre = this.genres.find(genre => genre.id_genre == this.updatedGenreId)!;
    this.filmsservice.updateFilm(this.currentFilm).subscribe(prod => { 
      this.router.navigate(['produits']); }  
      ); 
  }
}
