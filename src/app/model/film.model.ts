import { Genre } from "./Genre";

export class Film {
    subscribe(arg0: (film: any) => void) {
      throw new Error('Method not implemented.');
    }
    idFilm!: number;             
    nomFilm!: string;            
    prixFilm!: number;         
    datePublication!: Date; 
    genre! :Genre;    
  }
  