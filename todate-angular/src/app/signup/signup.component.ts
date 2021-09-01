import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.signupForm = this.fb.group({
      name: [null],
      email: [null],
      password: [null],
      
    })

  
  }

  ngOnInit(): void {

    

  }


  

}
