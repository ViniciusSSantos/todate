import { SignupComponent } from './../signup/signup.component';
import { LandingComponent } from './../landing/landing.component';
import { LoginComponent } from './../login/login.component';
import { Routes } from '@angular/router';



export const routes: Routes =[
    {path: 'login', component:LoginComponent},
    {path: 'landing', component: LandingComponent},
    {path:'signup', component: SignupComponent},
    { path: '', redirectTo: '/landing', pathMatch: 'full' }
]