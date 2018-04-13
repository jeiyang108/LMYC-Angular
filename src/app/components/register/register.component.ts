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
  
  constructor(
    private signupService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(signupForm: NgForm) {
    if (signupForm && signupForm.valid) {
      let address
      let contact: EmergencyContact = {

        name1: signupForm.form.value.name1,
        name2: signupForm.form.value.name2,
        phone1: signupForm.form.value.phone1,
        phone2: signupForm.form.value.phone2
      };
      let user: User = {
        UserName: signupForm.form.value.userName,
        Email: signupForm.form.value.email,
        Password: signupForm.form.value.password,
        ConfirmPassword: signupForm.form.value.confirmPassword,
        FirstName: signupForm.form.value.firstName,
        LastName: signupForm.form.value.lastName,
        Street: signupForm.form.value.street,
        City: signupForm.form.value.city,
        Province: signupForm.form.value.province,
        PostalCode: signupForm.form.value.postalCode,
        Country: signupForm.form.value.country,
        MobilePhone: signupForm.form.value.mobileNumber,
        HomePhone: signupForm.form.value.homePhone,
        WorkPhone: signupForm.form.value.workPhone,
        SailingQualifications: signupForm.form.value.sailingQualification,
        Skills: signupForm.form.value.skills,
        SailingExperience: signupForm.form.value.sailingExperience,
        EmergencyContacts: contact,
        MemberStatus: "Full Member",
        SkipperStatus: "Crew",
        Credits: signupForm.form.value.credits,
        id: null
      };
     }
  }
}
