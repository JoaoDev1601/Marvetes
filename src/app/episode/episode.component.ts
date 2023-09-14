import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  
  starIcon = faStar;
  nextIcon = faAngleDoubleRight;

  type = '';
  titulo = '';
  url = '';
  movies: any;
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
      this.type = this.route.snapshot.params['type'];
      this.titulo = this.route.snapshot.params['titulo'];
      if (this.type === 'watch') {
        this.url = "https://raw.githubusercontent.com/JoaoDev1601/api/main/episodios.json";
      }
      this.getMovie();
  }

  getMovie(): void {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
      (movie: {titulo: string}) => movie.titulo === this.titulo
      );
      if (index > -1) {
        this.movies = this.movies[index];
      }
    })
  }
  
}


