import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { hotel } from '../../modelo/hotel';

/**
 * Generated class for the BuscarHabitacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar-habitaciones',
  templateUrl: 'buscar-habitaciones.html',
})
export class BuscarHabitacionesPage implements OnInit{

  ListaHoteles : Array<hotel>;
  ListaHotelesTemp : Array<hotel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
  }

  ionViewDidLoad() {
   
  }

  ngOnInit(): void {
    this.api.consultarGlobal('assets/data/data.json').then(lista =>{
      this.ListaHoteles = lista as Array<hotel>;
      this.ListaHotelesTemp = this.ListaHoteles;
    });
  }

  filtros(fil){
    this.ListaHoteles = this.ListaHotelesTemp;
    console.log( 'filtro', fil , this.ListaHoteles)
    this.ListaHoteles = this.ListaHoteles.filter(i => 
        i.name.toString().toLowerCase().indexOf(fil.toLowerCase()) !== -1 
    );
    console.log( 'filtro', fil , this.ListaHoteles)
  }

}
