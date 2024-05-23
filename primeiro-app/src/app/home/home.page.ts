import { Component } from '@angular/core';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    cep:string = '04101300';
    endereco:any={logradouro:'',bairro:'',localidade:''};

  constructor(public cepSevice:CepService) {
    
    
  }
 
  consultaCEP(){
    this.cepSevice.getEndereco(this.cep)
    .then((json)=>{
      this.endereco = json
    })
    .catch((err)=>{console.log(err)})
  }
 
}
