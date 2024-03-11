import { Component } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private redireccionamiento:RedireccionamientoService, private alertController:AlertController,) {}

  resultado:any;
  operaciones:string="";
  finish:boolean=false;
  
  finished(){
    if(this.finish==true){
      this.operaciones="";
      this.finish=false;
    }
  }

  escribirop(dato:string){
    this.finished();
    this.operaciones+=dato;
  }

  removeElement() {
    this.finished();
    if(this.operaciones){
      let partes = this.operaciones.split(' ');
      if(partes.length>2){
        let operacionesnew = "";
        for (let i = 0;i < partes.length-2;i++){
          operacionesnew+=" "+partes[i];
        }
        this.operaciones=operacionesnew;
      }else{this.removeAll();}
    }
  }

  removeLastChar() {
    this.finished();
    if (this.operaciones.length !== 0) {
      let operacionesnew = "";
      if(this.operaciones.charAt(this.operaciones.length - 1)==" "){
        let operacionesnew = this.operaciones.slice(0, this.operaciones.length-3);
        this.operaciones = operacionesnew;
      }else{
        let operacionesnew = this.operaciones.slice(0, this.operaciones.length-1);
        this.operaciones = operacionesnew;
      }
    }
  }

  removeAll(){
    this.operaciones="";
  }

  async result(){
    this.finished();
    if (this.operaciones.length !== 0) {
      try {
        let result = eval(this.operaciones);
        if(/^-?\d*\.?\d+$/.test(result)){
          this.operaciones+=" = "+result;
          this.finish=true;
        }else {
          const alerta = await this.alertController.create(
            {
              header:"Error matematico",
              message:"Existe un error matematico",
              buttons:['Cerrar']
            });
            await alerta.present();
        }
      } catch (error) {
        const alerta = await this.alertController.create(
          {
            header:"Error de sintaxis",
            message:"Se encontró una sintaxis erronea",
            buttons:['Cerrar']
          });
          await alerta.present();
      }
    }
  }

  nav(data:string){
    this.redireccionamiento.redireccion(data);
  }
}
