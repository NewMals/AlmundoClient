import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  routeApi: string = "http://localhost:9000/";

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  consultarGlobal(controlador: string) {
    return this.http.get(this.routeApi + controlador).toPromise().then(response => {
      return response as any;
    });

  }

  consultarFiltro(controlador: string, body: any) {
    return this.http.post(this.routeApi + controlador, body).toPromise().then(response => {
      return response as any;
    });
  }
}
