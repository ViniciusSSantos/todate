import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const idToken = JSON.parse(localStorage.getItem("token")!);

    if(idToken){        
        return next.handle(request.clone({ setHeaders: {authorization: idToken}}));
    }

    else {
        return next.handle(request);
    }
  }
}
