import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hotel } from '../../modelo/hotel';
import { filtros } from '../../modelo/Filtros';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  
  routeApi : string = "http://localhost:9000/";

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  consultarGlobal(controlador: string) {
      return this.http.get(this.routeApi + controlador).toPromise().then(response =>{
        return response as any;
      });
 
  }

  consultarFiltro(controlador: string, body: any){
     return this.http.post(this.routeApi + controlador , body ).toPromise().then(response =>{
      return response as any;
   });
    // return this.http.get(this.routeApi + controlador + "/" + nombre).toPromise().then(response =>{
    //    return response as any;
    // });
  }
}
