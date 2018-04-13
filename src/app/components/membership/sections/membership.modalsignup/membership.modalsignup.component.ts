import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user';
import { EmergencyContact } from '../../../../models/emergency-contact';


@Component({
  selector: 'membership-modal-signup',
  templateUrl: './membership.modalsignup.component.html',
  styleUrls: ['./membership.modalsignup.component.css'],
  providers: [UserService]
})
export class MembershipModalSignupComponent implements OnInit {

  @Input() contact: EmergencyContact;
  
  constructor(
    private signupService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

/* Sorry Micole...
    register(signupForm: NgForm) {
    if (signupForm && signupForm.valid) {
      let user: User = {
        UserName: signupForm.form.value.userName,
        Email: signupForm.form.value.email,
        //Password: signupForm.form.value.password,
        //confirmPassword: signupForm.form.value.confirmPassword,
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
        MemberStatus: signupForm.form.value.memberStatus,
        SkipperStatus: signupForm.form.value.skipperStatus,
        Credits: 320,
        //contact.Name1: signupForm.form.value.emContactName1,
        emergencyContacts: EmergencyContact = {
          Name1 = signupForm.form.value.emContactName1;
        } 
      }


*/
      //console.log(user.password);
      //console.log(user.confirmPassword);

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
    // }
  //}
}
