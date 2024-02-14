import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  isVisible : boolean;
  produtos : string[];
  vezes: number;
  tipoPermissao: string;
  constructor() {
    this.tipoPermissao = "permissao 2";
    this.vezes = 0 ;
    this.isVisible = false;
    this.produtos = [
      "mouse",
      "teclado",
      "varinha",
      "calderão",
      "interloucutor"
    ]
   }
  onClick(): void {
    this.isVisible = this.isVisible ? false : true;
    this.vezes++;
  }
  ngOnInit(): void {
  }

}
