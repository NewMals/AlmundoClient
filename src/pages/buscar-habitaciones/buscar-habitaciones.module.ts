import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { BuscarHabitacionesPage } from './buscar-habitaciones';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BuscarHabitacionesPage,
  ],
  imports: [
    ComponentsModule,
    IonicModule,
    IonicPageModule.forChild(BuscarHabitacionesPage),
  ],
})
export class BuscarHabitacionesPageModule {}
