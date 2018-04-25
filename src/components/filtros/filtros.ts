import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello FiltrosComponent Component');
    this.text = 'Hello World';
  }

}
