import { Component } from '@angular/core';
import axios from 'axios';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-moneyconversion',
  templateUrl: './moneyconversion.page.html',
  styleUrls: ['./moneyconversion.page.scss'],
})
export class MoneyconversionPage {
  coversionoption: string[][] = [
    ['THB','Baht Tailandés'],
    ['CZK','Corona Checa'],
    ['DKK','Corona Danesa'],
    ['NOK','Corona Noruega'],
    ['SEK','Corona Sueca'],
    ['AUD','Dólar Australiano'],
    ['CAD','Dólar Canadiense'],
    ['HKD','Dólar de Hong Kong'],
    ['SGD','Dólar de Singapur'],
    ['USD','Dólar Estadounidense'],
    ['NZD','Dólar Neozelandés'],
    ['EUR','Euro'],
    ['HUF','Forinto Húngaro'],
    ['CHF','Franco Suizo'],
    ['ISK','Króna Islandesa'],
    ['HRK','Kuna Croata'],
    ['RON','Leu Rumano'],
    ['BGN', 'Lev Búlgaro'],
    ['GBP', 'Libra Esterlina Británica'],
    ['TRY', 'Lira Turca'],
    ['ILS', 'Nuevo Sheqel Israelí'],
    ['PHP', 'Peso Filipino'],
    ['MXN', 'Peso Mexicano'],
    ['ZAR', 'Rand Sudafricano'],
    ['BRL', 'Real Brasileño'],
    ['MYR', 'Ringgit Malasio'],
    ['RUB', 'Rublo Ruso'],
    ['INR', 'Rupia India'],
    ['IDR', 'Rupia Indonesia'],
    ['KRW', 'Won Surcoreano'],
    ['JPY', 'Yen Japonés'],
    ['CNY', 'Yuan Chino'],
    ['PLN', 'Zloty Polaco']
  ];
  enter:string='';
  nenter:any;
  exit:string='';
  nexit:any;

  constructor(private redireccionamiento:RedireccionamientoService) {}

  async conversion(){
    try {
      if(this.enter && this.nenter && this.exit){
        const respuesta = await axios.get(`http://localhost:3000/conversion/${this.enter}/${this.exit}`);
        let en=respuesta.data.data[this.enter];
        let ex=respuesta.data.data[this.exit];
        let res=((this.nenter*ex)/en).toFixed(2);
        this.nexit=this.nenter+' '+this.enter+' ▶ '+res+' '+this.exit;
      }else{alert('Rellena los campos requeridos.')}
    } catch (error) {
      console.error(error);
    }
  }

  nav(data:string){
    this.redireccionamiento.redireccion(data);
  }
}
