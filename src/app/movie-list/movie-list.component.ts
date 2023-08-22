import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{

  starIcon = faStar;

  filmes: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getFilmes();
  }

  getFilmes() {
    this.http.get("http://localhost:4200/assets/data/filmes.json").subscribe((movies) => {
      this.filmes = movies;
      console.log(this.filmes)
    })
  }

  goToMovie(type:string, id:string) {
    this.router.navigate(["movie", type, id]);
  }

}
