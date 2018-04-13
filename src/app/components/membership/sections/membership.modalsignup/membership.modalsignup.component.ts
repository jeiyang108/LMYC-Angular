import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user';


@Component({
  selector: 'membership-modal-signup',
  templateUrl: './membership.modalsignup.component.html',
  styleUrls: ['./membership.modalsignup.component.css']
})
export class MembershipModalSignupComponent implements OnInit {

  constructor(
    private signupService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(signupForm: NgForm) {
    if (signupForm && signupForm.valid) {
      let user: User = {
        username: signupForm.form.value.userName,
        email: signupForm.form.value.email,
        password: signupForm.form.value.password,
        confirmPassword: signupForm.form.value.confirmPassword,
        firstName: signupForm.form.value.firstName,
        lastName: signupForm.form.value.lastName,
        street: signupForm.form.value.street,
        city: signupForm.form.value.city,
        province: signupForm.form.value.province,
        postalCode: signupForm.form.value.postalCode,
        country: signupForm.form.value.country,
        mobilePhone: signupForm.form.value.mobileNumber,
        homePhone: signupForm.form.value.homePhone,
        workPhone: signupForm.form.value.workPhone,
        sailingQualification: signupForm.form.value.sailingQualification,
        skills: signupForm.form.value.skills,
        sailingExperience: signupForm.form.value.sailingExperience,
        emContactName1: signupForm.form.value.emContactName1,
        emContactPhone1: signupForm.form.value.emContactPhone1,
        emContactName2: signupForm.form.value.emContactName2,
        emContactPhone2: signupForm.form.value.emContactPhone2,
        membershipType: "Full Member",
        skipperStatus: "Crew",
        emRelationship1: signupForm.form.value.emRelationship1,
        emRelationship2: signupForm.form.value.emRelationship2
      }

      console.log(user.password);
      console.log(user.confirmPassword);

    //   var result = this.authService.register(user)
    //     .subscribe(
    //       response => {
    //         if (this.authService.redirectUrl) {
    //           this.router.navigateByUrl(this.authService.redirectUrl);
    //         } else {
    //           this.router.navigate(['/']);
    //         }
    //       },
    //       error => {
    //         var results = error['_body'];
    //         this.errorMessage = error.statusText + ' ' + error;
    //       }
    //     );
    // } else {
    //   this.errorMessage = 'Please enter a user name and password.';
     }
  }
}
