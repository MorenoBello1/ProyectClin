import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

   private http = inject(HttpClient); // http para hacer peticiones se llama injeccion de dependencias
   private url = environment.url + '/vistas';  
   // para obtener la url 


   getVistasCuenta(): Promise<any> {
    return this.http.get(this.url).toPromise();
   }

  

}
