import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

   private https = inject(HttpClient); // http para hacer peticiones se llama injeccion de dependencias
   private url = environment.url + '/vistas'; // obtienes el environment de environment.prod.ts 
   // para obtener la url 

  //metodo para obtener las vistas de la cuenta principal por ahora sin headers
   getVistasCuenta(): Promise<any> {
    return this.https.get(this.url).toPromise();
   }
}
