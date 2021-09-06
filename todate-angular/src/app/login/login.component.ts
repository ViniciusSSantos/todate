import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    ) { 
    this.loginForm = this.fb.group({     
      email: [null],
      password: [null],
      
    })   
  }

  ngOnInit(): void {
    
  }

  onSubmit(){

    console.log(this.loginForm.value);
    const loginValue = this.loginForm.value;
    this.authService.login(loginValue.email, loginValue.password)   
    
  } 

}
