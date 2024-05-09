import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  n1:string;
  n2:string;
  resultado:number;

  constructor() {
    this.n1='0';
    this.n2='0';
    this.resultado=0;
  }
  calcular(){
    this.resultado = parseFloat(this.n1) + parseFloat(this.n2)
  }
  exibirresultado():number{
    return this.resultado
  }
}
