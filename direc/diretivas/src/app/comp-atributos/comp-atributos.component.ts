import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  status : string;
  item:string = "";
  constructor() {
    this.status = "enable";
   }
  
  trocar() : void {
    this.status = this.status == "enable" ? "disable" : "enable";
  }

  ngOnInit(): void {
  }

}
