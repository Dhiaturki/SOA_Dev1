import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent  implements OnInit {
  films!: string[]; 
  constructor() { 
    this.films = ["Fight Clube", "Dune", "Lost"]; 
   } 
  
  ngOnInit(): void {
    
  }

}
