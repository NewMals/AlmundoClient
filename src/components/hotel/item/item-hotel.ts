import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello ItemHotelComponent Component');
    this.text = 'Hello World';
  }

}
