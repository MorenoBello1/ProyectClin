import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url = environment.url + '/login';
  // private Http = Inject(HttpClient)
  constructor(private http2 : HttpClient) { } 

  postLogin(login:any):Promise<any>{
    return this.http2.post(this.url, login).toPromise();
  }
}
