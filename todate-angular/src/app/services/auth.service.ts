import { User } from './../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginApi = 'localhost:3333/login';


  constructor(private http: HttpClient) { }

  login(email:string, password:string){
    return this.http.post<User>(this.loginApi, {email, password});            
  }

}
