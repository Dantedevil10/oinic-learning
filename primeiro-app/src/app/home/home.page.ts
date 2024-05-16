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
    this.n1= '5';
    this.n2= '0';
    this.resultado=0;
    
  }
  Fatorial(){
    let fatorial:number = 1
    let numero:number = parseFloat(this.n1)
    for(let i = 1;i<=numero;i=i+1){
      fatorial = fatorial*i
      
    }
    this.resultado=fatorial
    
  }


  calcular(){
    this.resultado = parseFloat(this.n1) + parseFloat(this.n2)
  }
  exibirresultado():number{
    return this.resultado
  }
}
