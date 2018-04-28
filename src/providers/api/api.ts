import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hotel } from '../../modelo/hotel';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  
  route : string = "http://localhost:9000/";

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  consultarGlobal(controlador: string) {
      return this.http.get(this.route + controlador).toPromise().then(response =>{
        return response as any;
      });
 
  }

  consultar(controlador: string, nombre: string){
    return this.http.get(this.route + controlador + nombre).toPromise().then(response =>{
       return response;
    });
  }
}
