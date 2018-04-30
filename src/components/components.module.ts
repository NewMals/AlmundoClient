import { NgModule } from '@angular/core';
import { FiltrosComponent } from './filtros/filtros';
import { ItemHotelComponent } from './hotel/item/item-hotel';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { ViewHotelComponent } from './hotel/view/view-hotel';
@NgModule({
	declarations: [FiltrosComponent,
    ItemHotelComponent,
    ViewHotelComponent],
	imports: [IonicModule, IonicPageModule],
	exports: [FiltrosComponent,
    ItemHotelComponent,
    ViewHotelComponent]
    , entryComponents: [
        ViewHotelComponent
    ]
})
export class ComponentsModule {}
