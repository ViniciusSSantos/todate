import { CreateUsersService } from './../services/create-users.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private createUsersService: CreateUsersService) { 
    this.signupForm = this.fb.group({
      name: [null],
      email: [null],
      password: [null],
    })

  
  }

  ngOnInit(): void { }

  onSubmit(){
    console.log(this.signupForm.value);
    const signupValues = this.signupForm.value;
    this.createUsersService.Create(signupValues.name, signupValues.email, signupValues.password)
        
  }


  

}
