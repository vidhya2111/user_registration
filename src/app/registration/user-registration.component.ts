import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserServiceService} from '../user-service.service'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent  {

  registrationForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private userService: UserServiceService
  ) { 
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      bio: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registrationForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registrationForm.invalid) {
          return;
      }
      this.userService.userRegistration(this.registrationForm.value).subscribe((data: any) => {
         if(data.success) {
           localStorage.setItem('isUserSuccessfullyRegistered','true')
           return this.router.navigateByUrl('user-profile')
         }
         return ''
      })

     
    }
}
