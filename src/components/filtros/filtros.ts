import { Component, Output, EventEmitter } from '@angular/core';
import { filtros } from '../../modelo/Filtros';

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

  @Output() filtrarHoteles: EventEmitter<filtros> = new EventEmitter<filtros>();

  filtrosBuqueda: filtros = new filtros();

  iconUp: string = "ios-arrow-up"
  iconDown: string = "ios-arrow-down"
  iconFilter: string;
  iconSearch: string;
  iconStart: string;
  Search: boolean = true;
  Start: boolean = true;
  Filter: boolean = true;

  filtroEstrella = [
    { valor: 0, check: false }
    , { valor: 5, check: false }
    , { valor: 4, check: false }
    , { valor: 3, check: false }
    , { valor: 2, check: false }
    , { valor: 1, check: false }
  ]


  constructor() {
    console.log('Hello FiltrosComponent Component');
    this.iconSearch = this.iconUp;
    this.iconStart = this.iconUp;
    this.iconFilter = this.iconUp;
    this.filtrosBuqueda.estrellas = new Array<number>();
    this.filtrosBuqueda.nombre = "";
  }


  Mostrar(valor) {
    switch (valor) {
      case "Search": {
        this.Search = !this.Search;
        if (this.Search == true) {
          this.iconSearch = this.iconUp;
        } else {
          this.iconSearch = this.iconDown;
        }
        break;
      }
      case "Start": {
        this.Start = !this.Start;
        if (this.Start == true) {
          this.iconStart = this.iconUp;
        } else {
          this.iconStart = this.iconDown;
        }
        break;
      }
      case "Filter": {
        this.Filter = !this.Filter;
        if (this.Filter == true) {
          this.iconFilter = this.iconUp;
        } else {
          this.iconFilter = this.iconDown;
        }
        break;
      }
    }
  }


  metFilEstrellas(filtro) {

    switch (filtro.check) {
      case true : {
        if (filtro.valor == 0) { 
          this.filtroEstrella.forEach(estrella => {
            if(estrella.valor != 0){
              estrella.check = false;
            }
            
          });
          this.filtrosBuqueda.estrellas = new Array<number>();
          this.filtrosBuqueda.estrellas.push(filtro.valor);
        } else
        {
          if(this.filtrosBuqueda.estrellas[0] == 0 ){
            this.filtrosBuqueda.estrellas.shift();
            this.filtroEstrella[0].check =false;
            console.log(this.filtroEstrella);
          }
          
          this.filtrosBuqueda.estrellas.push(filtro.valor);
          this.filtrarHoteles.emit(this.filtrosBuqueda);
        }
        break;
      }
      case false :{
        this.filtrosBuqueda.estrellas.splice(this.filtrosBuqueda.estrellas.indexOf(filtro.valor) , 1);
        this.filtrarHoteles.emit(this.filtrosBuqueda);
        break;
      }
    }

  }

  buscarHotel(evento) {
    this.filtrosBuqueda.nombre = evento
    this.filtrarHoteles.emit(this.filtrosBuqueda);
  }

  cantidadEstrellas(cantidad) {

    let estrellas: number[] = [];
    for (let i = 1; i <= cantidad; i++) {
      estrellas.push(i);
    }
    return estrellas;
  }

}
