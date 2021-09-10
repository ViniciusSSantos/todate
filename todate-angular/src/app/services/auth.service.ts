import { User } from './../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from "moment";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  login(email:string, password:string){
    return this.http.post('http://localhost:3333/login', {email, password})
    .subscribe( res => {
      this.setSession(res);
      this.router.navigate(['/events'])
    
    })            
  }


  private setSession(authResponse: object){
    const expiresAt = moment().add(259200, 'second');
    localStorage.setItem("token", JSON.stringify(authResponse));
    localStorage.setItem("expiresAt", expiresAt.toString());
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

    
  getExpiration() {
    const expiration = localStorage.getItem("expiresAt")!;
    const expiresAt = new Date(expiration);
    return moment(expiresAt);
}    

}
