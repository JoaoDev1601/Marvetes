import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  starIcon = faStar;

  fase1:any;
  fase2:any;
  fase3:any;
  fase4:any;
  fase5:any;
  cronOrder:any;
  defenders:any;
  spiderVerse:any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
      this.getFase1();
      this.getFase2();
      this.getFase3();
      this.getFase4();
      this.getFase5();
      this.getCronOrder();
      this.getDefenders();
      this.getSpiderVerse();
  }

  getFase1() {
    this.http.get("https://raw.githubusercontent.com/JoaoDev1601/api/main/mcu-fase-1.json").subscribe((movies) => {
      this.fase1 = movies;
      console.log(this.fase1)
    })
  }

  getFase2() {
    this.http.get("https://raw.githubusercontent.com/JoaoDev1601/api/main/mcu-fase-2.json").subscribe((movies) => {
      this.fase2 = movies;
      console.log(this.fase2)
    })
  }

  getFase3() {
    this.http.get("https://raw.githubusercontent.com/JoaoDev1601/api/main/mcu-fase-3.json").subscribe((movies) => {
      this.fase3 = movies;
      console.log(this.fase3)
    })
  }

  getFase4() {
    this.http.get("https://raw.githubusercontent.com/JoaoDev1601/api/main/mcu-fase-4.json").subscribe((movies) => {
      this.fase4 = movies;
      console.log(this.fase4)
    })
  }

  getFase5() {
    this.http.get("https://raw.githubusercontent.com/JoaoDev1601/api/main/mcu-fase-5.json").subscribe((movies) => {
      this.fase5 = movies;
      console.log(this.fase5)
    })
  }

  getCronOrder() {
    this.http.get("https://raw.githubusercontent.com/JoaoDev1601/api/main/mcu-ordem-crono.json").subscribe((movies) => {
      this.cronOrder = movies;
      console.log(this.cronOrder)
    })
  }

  getDefenders() {
    this.http.get("https://raw.githubusercontent.com/JoaoDev1601/api/main/defensores.json").subscribe((movies) => {
      this.defenders = movies;
      console.log(this.defenders)
    })
  }

  getSpiderVerse() {
    this.http.get("https://raw.githubusercontent.com/JoaoDev1601/api/main/spiders.json").subscribe((movies) => {
      this.spiderVerse = movies;
      console.log(this.spiderVerse)
    })
  }

  goToMovie(type:string, id:string) {
    this.router.navigate(["movie", type, id]);
  }

  goToShow(type:string, id:string) {
    this.router.navigate(["show", type, id]);
  }

}
