import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Film } from '../model/film.model';
import { FilmService } from '../film.service';
import { Genre } from '../model/Genre';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  newFilm = new Film();
  genres!: Genre[];
  newidGenre!: number;
  newGnere! : Genre;
  constructor(private filmService: FilmService,private router : Router) { } 

  addFilm() {
    this.newFilm.genre=this.genres.find(gen =>gen.id_genre == this.newidGenre)!;
    this.filmService.ajouterFilm(this.newFilm).subscribe(film => {
      console.log(film);
      this.router.navigate(['films']);
    })
  }

  ngOnInit(): void { 
    this.filmService.listeGnere().subscribe(genrs => { 
                       console.log(genrs);
                       this.genres = genrs._embedded.genres;
   }); 
   } 
}
