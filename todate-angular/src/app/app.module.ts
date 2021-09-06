import { AuthInterceptor } from './services/auth.interceptor';
import { EventsModule } from './events/events.module';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';


import { AuthService } from './services/auth.service';
import { CreateUsersService } from './services/create-users.service';
import { EventsService } from './events/services/events.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,    
    HttpClientModule,
    SignupModule,
    LoginModule,
    EventsModule
  ],
  providers: [AuthService, CreateUsersService, EventsService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
