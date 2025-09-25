import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/modelos';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  loginIniciar : Login;
  private ServiceLogin = inject(LoginService);
  private Router = inject(Router);


  constructor() { 
    this.loginIniciar = new Login();
  }

  ngOnInit() {
    
  }

  // iniciar(){
  //   console.log("Iniciando")
  //   this.loginIniciar = new Login();
  // } 

  async login(){
    try{
     await this.ServiceLogin.postLogin(this.loginIniciar).then(res=>{
      console.log(res)
      this.Router.navigate(['/home'])
     })

    }catch(error){
      console.log(error)
    }
  }

}
