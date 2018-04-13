import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { EmergencyContact } from './../../models/emergency-contact';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {
  
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  province: string;
  mobilePhone: string;
  homePhone: string;
  workPhone: string;
  sailingQualification: string;
  ailingQualification: string;
  skills: string;
  sailingExperience: string;
  contact: string;

  name1: string;
  name2: string;
  phone1: string;
  phone2: string;


  constructor(
    private signupService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(signupForm: NgForm) {
    console.log(signupForm.valid);
    if (signupForm && signupForm.valid) {
      let emergencyContact: EmergencyContact = {
        name1: this.name1,
        name2: this.name2,
        phone1: this.phone1,
        phone2: this.phone2
      }

      let user: User = {
        userName: this.userName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        firstName: this.firstName,
        lastName: this.lastName,
        street: this.street,
        city: this.city,
        province: this.province,
        postalCode: this.postalCode,
        country: this.country,
        mobilePhone: this.mobilePhone,
        homePhone: this.homePhone,
        workPhone: this.workPhone,
        sailingQualifications: this.sailingQualification,
        skills: this.skills,
        sailingExperience: this.sailingExperience,
        emergencyContacts: emergencyContact,
        memberStatus: 'Full Member',
        skipperStatus: 'Crew',
        id: null
      };
      
      this.signupService.register(user)
          .subscribe(res => {
            this.router.navigate(['/login/']);
      });
    }

    this.router.navigate(['/login/']);
  }
}
