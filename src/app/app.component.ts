import { Component } from '@angular/core';

declare function greet(): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Marvetes';
}


export class AppCompoent {

  myScriptElement: HTMLScriptElement;

  constructor(){
     greet();

     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "http://localhost:4200/src/assets/script.js";
     document.body.appendChild(this.myScriptElement);

  }
}
