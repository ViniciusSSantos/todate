import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(private fb: FormBuilder) { 
    this.loginForm = this.fb.group({     
      email: [null],
      password: [null],
      
    })


   
  }

  ngOnInit(): void {
    
  }

 /*  login() {
    const val = this.form.value;

    if (val.email && val.password) {
        this.authService.login(val.email, val.password)
            .subscribe(
                () => {
                    console.log("User is logged in");
                    
                }
            );
    }
  } */

}
