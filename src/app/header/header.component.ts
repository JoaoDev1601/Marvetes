import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  searchIcon = faMagnifyingGlass;

  constructor(private router: Router) { } 
  ngOnInit() { }

  goToHome(){
    this.router.navigate(["home"]);
  }

}
