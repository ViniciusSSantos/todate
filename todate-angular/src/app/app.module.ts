import { HttpClientModule } from '@angular/common/http';
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
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,    
    HttpClientModule,
    SignupModule,
    LoginModule
  ],
  providers: [AuthService, CreateUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
