import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-movie-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit{

  starIcon = faStar;

  series: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries() {
    this.http.get("https://raw.githubusercontent.com/JoaoDev1601/api/main/series.json").subscribe((movies) => {
      this.series = movies;
      console.log(this.series)
    })
  }

  goToShow(type:string, id:string) {
    this.router.navigate(["show", type, id]);
  }

}
