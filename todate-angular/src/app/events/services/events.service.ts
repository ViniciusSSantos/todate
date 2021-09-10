import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from 'src/app/models/Events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }


  getEvents(){
    /* const authHeader = JSON.parse(localStorage.getItem("token")!);
    console.log(authHeader)
    const headers = new HttpHeaders().append("Authorization", authHeader) */
    
    // 
    return this.http.get<Events[]>('http://localhost:3333/user/events' );
  }

}
