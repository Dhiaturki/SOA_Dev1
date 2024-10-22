import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../model/film.model';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent  implements OnInit {
  films? : Film[]; 
  constructor(private filmService : FilmService ) { 
    
   }
   chargerProduits(){ 
    this.filmService.listeFilms().subscribe(films => { 
      console.log(films); 
      this.films = films; 
    });  
  }  
   supprimerFilm(f: Film) 
   { 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) 
    this.filmService.supprimerFilm(f.idFilm).subscribe(() => { 
      console.log("film supprimé"); 
      this.chargerProduits(); 
         });
   }
   ngOnInit(): void { 
    this.filmService.listeFilms().subscribe(films => { 
      console.log(films); 
      this.films = films; 
    }); 
  }
  

}

