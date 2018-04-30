import { Component, Input } from '@angular/core';
import { hotel } from '../../../modelo/hotel';
import { ModalController } from 'ionic-angular';
import { ViewHotelComponent } from '../view/view-hotel';

@Component({
  selector: 'item-hotel',
  templateUrl: 'item-hotel.html'
})
export class ItemHotelComponent {

  text: string;
  @Input() itemHotel = new hotel;

  constructor(private modalCtrl: ModalController) {
    console.log('Hello ItemHotelComponent Component');
    this.text = 'Hello World';
  }

  VerHotel(){
    let modal = this.modalCtrl.create(
      ViewHotelComponent , { hotel: this.itemHotel}, { enableBackdropDismiss: false}
    ) 
    modal.present();
  }
}
