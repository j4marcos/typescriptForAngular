import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  styleMode = "light"
  
  changeMode(): void {
    this.styleMode =  this.styleMode  == "light" ? "dark" : "light";
  }
}
