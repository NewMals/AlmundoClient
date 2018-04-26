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
  

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  consultar(controlador: string) {
      return this.http.get(controlador).toPromise().then(response =>{
        return response;
      });
 
  }
}
