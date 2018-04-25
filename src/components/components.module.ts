import { NgModule } from '@angular/core';
import { FiltrosComponent } from './filtros/filtros';
import { ItemHotelComponent } from './hotel/item/item-hotel';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [FiltrosComponent,
    ItemHotelComponent],
	imports: [IonicModule],
	exports: [FiltrosComponent,
    ItemHotelComponent]
})
export class ComponentsModule {}
