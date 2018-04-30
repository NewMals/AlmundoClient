import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { hotel } from '../../modelo/hotel';
import { filtros } from '../../modelo/Filtros';

@IonicPage()
@Component({
  selector: 'page-buscar-habitaciones',
  templateUrl: 'buscar-habitaciones.html',
})
export class BuscarHabitacionesPage implements OnInit {

  ListaHoteles: Array<hotel>;
  ListaHotelesTemp: Array<hotel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider,
    private alertCtrl: AlertController) {
  }

  ngOnInit(): void {
    this.consultaInicial();
  }

  consultaInicial() {
    this.api.consultarGlobal('Listado').then(response => {
      this.ListaHoteles = response.data as Array<hotel>;
      this.ListaHotelesTemp = this.ListaHoteles;
    }).catch(error =>{
      this.Alertas('El servidor no retornó ningun resultado, por favor verifique si se encuentra funcionando');
    });
  }

  filtros(fil: filtros) {
    if (fil.nombre || fil.estrellas) {
      this.api.consultarFiltro('Listado', fil ).then(response =>{
        this.ListaHoteles = response.Lista
      });
    }else{
      this.consultaInicial();
    }
  }

  Alertas(message: string) {
    let alert = this.alertCtrl.create({
      title: message,
      buttons: ['Aceptar']
    });

    alert.present();
  }

}
