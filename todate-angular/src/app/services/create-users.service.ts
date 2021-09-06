import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CreateUsersService {

  constructor(private http: HttpClient) {
   
   }


   Create(name:string, email: string, password:string){
    this.http.post( 'http://localhost:3333/createusers', {name,email,password})
    .subscribe((dados) => console.log(dados))
  }
}
