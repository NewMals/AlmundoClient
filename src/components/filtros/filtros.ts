import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the FiltrosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'filtros',
  templateUrl: 'filtros.html'
})
export class FiltrosComponent {

  iconUp: string = "ios-arrow-up"
  iconDown: string = "ios-arrow-down"
  iconSearch: string;
  iconStart: string;  
  Search: boolean = true;
  Start: boolean =true;
  x : number = 0;
  text: string;
  filtroEstrella = [
    { valor: 1, check: false }
    , { valor: 2, check: false }
    , { valor: 3, check: false }
    , { valor: 4, check: false }
    , { valor: 5, check: false }]
    ;
  @Output() filtrarHoteles : EventEmitter<any> = new EventEmitter<any>();


  constructor() {
    console.log('Hello FiltrosComponent Component');
    this.iconSearch = this.iconUp;
    this.iconStart = this.iconUp;
  }

  MostrarSearch(){
    this.Search  = !this.Search;
    if(this.Search == true){
      this.iconSearch = this.iconUp;
    }else{
      this.iconSearch = this.iconDown;
    }
  }

  MostrarStart(){
    this.Start  = !this.Start;
    if(this.Start == true){
      this.iconStart = this.iconUp;
    }else{
      this.iconStart = this.iconDown;
    }
  }

  metFilEstrellas(filtro){
    console.log('filtro ' + filtro);
  }

  buscarHotel(evento){

    this.filtrarHoteles.emit(evento);
  }

  cantidadEstrellas(cantidad){
    
    let estrellas: number[] = [];
    for(let i = 1; i <= cantidad; i++){
      estrellas.push(i);
    }
    return estrellas;
  }

}
