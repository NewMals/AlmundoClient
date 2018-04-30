import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { hotel } from '../../../modelo/hotel';

@Component({
  selector: 'view-hotel',
  templateUrl: 'view-hotel.html'
})
export class ViewHotelComponent {

  text: string;
  ViewHotel = new hotel;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    console.log('Hello ViewHotelComponent Component');
    this.text = 'Hello World';
    this.ViewHotel = this.navParams.get('hotel');
  }

  CerrarModal() {
    this.viewCtrl.dismiss();
  }

}
