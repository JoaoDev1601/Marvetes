import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  starIcon = faStar

  ep: any;

  type = '';
  titulo = '';
  url = '';
  movies: any;
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.titulo = this.route.snapshot.params['titulo'];
    if (this.type === 'serie') {
      this.url = "https://raw.githubusercontent.com/JoaoDev1601/api/main/mcu-ordem-crono.json";
    }
    this.getMovie();
    this.getEp();

    this.type = this.route.snapshot.params['type'];
    this.titulo = this.route.snapshot.params['titulo'];
    if (this.type === 'serie') {
      this.url = "https://raw.githubusercontent.com/JoaoDev1601/api/main/defensores.json";
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

  getEp(): void {
    this.http.get("https://raw.githubusercontent.com/JoaoDev1601/api/main/episodios.json").subscribe((movies) => {
      this.ep = movies;
      console.log(this.ep);
    });
  }

  goToEp(type:string, id:string) {
    this.router.navigate(["episode", type, id]);
  }

}
