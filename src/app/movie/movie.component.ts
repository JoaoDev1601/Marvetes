import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit{
  
  starIcon = faStar

  type = '';
  titulo = '';
  url = '';
  movies: any;
  movie: any;
  
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.titulo = this.route.snapshot.params['titulo'];
    if (this.type === 'filme') {
      this.url = "https://raw.githubusercontent.com/JoaoDev1601/api/main/mcu-ordem-crono.json";
    }
    this.getMovie();

    this.type = this.route.snapshot.params['type'];
    this.titulo = this.route.snapshot.params['titulo'];
    if (this.type === 'filme') {
      this.url = "https://raw.githubusercontent.com/JoaoDev1601/api/main/spiders.json";
    }
    this.getMovie();
  }

  getMovie(): void {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: {titulo: string}) => movie.titulo === this.titulo
      );
      if (index > -1){
        this.movie = this.movies[index];
      }
    })
  }


}