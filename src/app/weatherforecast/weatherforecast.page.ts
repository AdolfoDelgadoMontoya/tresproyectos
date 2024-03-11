import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weatherforecast.page.html',
  styleUrls: ['./weatherforecast.page.scss'],
})
export class WeatherforecastPage implements OnInit {
  constructor(private redireccionamiento:RedireccionamientoService) {}

  //Los paises tiene el formato ISO 3166
  paises:any[] = [];
  ciudad:string = "";
  selectedPais:any;
  climadata:any[] = [];
  
  ngOnInit() {
    this.paisdata();
  }

  async paisdata(){
    try {
      const respuestapais = await axios.get('http://localhost:3000/paises');
      if(respuestapais){
        this.paises = respuestapais.data;
        this.paises.sort((a, b) => (a.name.common > b.name.common) ? 1 : -1);
      }else{alert('No se encontro la conexion a paises.')}
    } catch (error) {
      console.error(error);
    }
  }
  
  async wheatherdata(){
    if(this.selectedPais && this.ciudad){
      try {
        const respuestawheather = await axios.get(`http://localhost:3000/clima/${this.ciudad}/${this.selectedPais}`);
        this.climadata = respuestawheather.data;
      } catch (error) {
        console.error(error);
      }
    }
    else{
      alert("No ingresaste ciudad o pais.");
    }
  }

  nav(data:string){
    this.redireccionamiento.redireccion(data);
  }
}
