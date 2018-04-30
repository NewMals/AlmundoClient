import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { hotel } from '../../modelo/hotel';
import { filtros } from '../../modelo/Filtros';

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
export class BuscarHabitacionesPage implements OnInit {

  ListaHoteles: Array<hotel>;
  ListaHotelesTemp: Array<hotel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
  }

  ionViewDidLoad() {

  }

  ngOnInit(): void {
    this.consultaInicial();
  }

  consultaInicial() {
    this.api.consultarGlobal('Listado').then(response => {
      console.log(response);
      this.ListaHoteles = response.data as Array<hotel>;
      this.ListaHotelesTemp = this.ListaHoteles;
    });
  }

  filtros(fil: filtros) {
    console.log('filtros', fil);
    if (fil.nombre || fil.estrellas) {
      this.api.consultarFiltro('Listado', fil ).then(response =>{

        this.ListaHoteles = response.Lista
      });
    }else{
      this.consultaInicial();

    }


    // this.ListaHoteles = this.ListaHotelesTemp;

    // this.ListaHoteles = this.ListaHoteles.filter(i =>
    //   ( i.name.toLowerCase().indexOf(fil.nombre.toLowerCase()) !== -1) ||
    //   (fil.estrellas.find(start => start ===  i.starts))
    // );
    // console.log('filtro',fil.estrellas.find(start => start === 5));
  }

}
