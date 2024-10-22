import { Injectable } from '@angular/core';
import { Film } from './model/film.model';
import { Genre } from './model/Genre';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { GenreWrapper } from './model/GenreWrapper';

const httpOptions = 
{  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  apiURL: string = 'http://localhost:8081/films/api';
  apiURLgenre: string = 'http://localhost:8081/films/genre'; 
  films!: Film[];
  film!: Film;
  genres! : Genre[]
  constructor(private http : HttpClient) {
     /*this.genres = [
      { id_genre: 1, nom_genre: "Action" },
      { id_genre: 2, nom_genre: "Drama" },
      { id_genre: 3, nom_genre: "Comedy" }
    ];

    this.films = [
      { idFilm: 1, nomFilm: "Inception", prixFilm: 10.99, datePublication: new Date("2010-07-16"), genre: { id_genre: 1, nom_genre: "Action" } },
      { idFilm: 2, nomFilm: "The Shawshank Redemption", prixFilm: 9.99, datePublication: new Date("1994-09-23"), genre: { id_genre: 2, nom_genre: "Drama" } },
      { idFilm: 3, nomFilm: "The Hangover", prixFilm: 7.99, datePublication: new Date("2009-06-05"), genre: { id_genre: 3, nom_genre: "Comedy" } }
    ];
    */
  }

  listeFilms(): Observable<Film[]> { 
    return this.http.get<Film[]>(this.apiURL); 
  }

  ajouterFilm(film: Film): Observable<Film> { 
    return this.http.post<Film>(this.apiURL,film,httpOptions);
  }

  supprimerFilm(id : number) { 
    const url = `${this.apiURL}/${id}`; 
    return this.http.delete(url, httpOptions);
  }

  consulterFilm(id: number): Film {     
    this.film = this.films.find(f => f.idFilm === id)!; 
    return this.film; 
  }

  trierFilms() { 
    this.films = this.films.sort((n1, n2) => { 
      if (n1.idFilm! > n2.idFilm!) return 1; 
      if (n1.idFilm! < n2.idFilm!) return -1; 
      return 0; 
    }); 
  }

  updateFilm(film : Film): Observable<Film>  {
    return this.http.put<Film>(this.apiURL, film, httpOptions);
  }
  listeGnere():Observable<GenreWrapper>{
    return this.http.get<GenreWrapper>(this.apiURLgenre); 
  }
  consulterGner(id:number): Observable<Film>{
    const url = `${this.apiURL}/${id}`; 
    return this.http.get<Film>(url); 
  }
}
