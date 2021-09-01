import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';


import { AuthService } from './services/auth.service';


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
    LoginModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
