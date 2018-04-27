import { Component, Output, EventEmitter, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

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
export class FiltrosComponent implements OnChanges {


  ngOnChanges(): void {
      console.log(this.filtro.nativeElement);
  }

  iconUp: string = "ios-arrow-up"
  iconDown: string = "ios-arrow-down"
  iconFilter: string;
  iconSearch: string;
  iconStart: string;
  Search: boolean = true;
  Start: boolean = true;
  Filter: boolean = true;

  filtroEstrella = [
    { valor: 1, check: false }
    , { valor: 2, check: false }
    , { valor: 3, check: false }
    , { valor: 4, check: false }
    , { valor: 5, check: false }]
    ;
  @Output() filtrarHoteles: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('filtro') filtro : ElementRef

  constructor() {
    console.log('Hello FiltrosComponent Component');
    this.iconSearch = this.iconUp;
    this.iconStart = this.iconUp;
    this.iconFilter = this.iconUp;

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
    console.log('filtro ' + filtro);
  }

  buscarHotel(evento) {

    this.filtrarHoteles.emit(evento);
  }

  cantidadEstrellas(cantidad) {

    let estrellas: number[] = [];
    for (let i = 1; i <= cantidad; i++) {
      estrellas.push(i);
    }
    return estrellas;
  }

}
