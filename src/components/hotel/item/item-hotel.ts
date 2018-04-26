import { Component, Input } from '@angular/core';
import { hotel } from '../../../modelo/hotel';

/**
 * Generated class for the ItemHotelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-hotel',
  templateUrl: 'item-hotel.html'
})
export class ItemHotelComponent {

  text: string;
  @Input() itemHotel = new hotel;

  constructor() {
    console.log('Hello ItemHotelComponent Component');
    this.text = 'Hello World';
  }

  cantidadEstrellas(cantidad){
    let estrellas: number[] = [];
    for(var i = 1; i <= cantidad; i++){
      estrellas.push(i);
    }
    return estrellas;
  }
}
