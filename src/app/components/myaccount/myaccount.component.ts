import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AccountService } from '../../services/account.service';
import { EmergencyContact } from '../../models/emergency-contact';

import { Router } from '@angular/router';


@Component({
  selector: 'my-account',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})

export class MyAccountComponent implements OnInit {
  user: User = new User();
  changedUser: User = new User();
  emergencyContact: EmergencyContact = new EmergencyContact();
  changedEmergencyContact: EmergencyContact = new EmergencyContact();

  firstName: string

  username: string = sessionStorage.getItem("username");
  
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.displayUserInfo();
  }

  convertToUppercase(input: any) : User {
    let result : any = {}

    Object.keys(input).forEach( key => {
      let destName : string = key.charAt(0).toUpperCase() + key.substr(1);
      result[destName] = input[key];
    });

    return result as User;
  }

  //used to retrieve account info of the currenty logged in user.
  displayUserInfo(): void {
      this.accountService.getUserByName(this.username)
        .subscribe((user : User) => {
          this.user = user;
          //this.changedUser = this.convertToUppercase(user);

          // console.log(user);
          
          console.log(this.user.emergencyContacts.name1)
          this.emergencyContact.name1 = user.emergencyContacts.name1;
          this.emergencyContact.name2 = user.emergencyContacts.name2;
          this.emergencyContact.phone1 = user.emergencyContacts.phone1;
          this.emergencyContact.phone2 = user.emergencyContacts.phone2;
          

          this.changedEmergencyContact.name1 = user.emergencyContacts.name1;
          this.changedEmergencyContact.name2 = user.emergencyContacts.name2;
          this.changedEmergencyContact.phone1 = user.emergencyContacts.phone1;
          this.changedEmergencyContact.phone2 = user.emergencyContacts.phone2;
          console.log(this.emergencyContact);
        });
  }
  
  updateUserInfo(): void {
      // this.changedUser.EmergencyContacts = this.changedEmergencyContact;
      this.accountService.updateUserInfo(this.changedUser).then( () => {
        this.displayUserInfo();
      }).catch( () => {
        alert("Validation failed.");
      });
  }
  
  changePassword(): void {
      if(this.newPassword != this.newPasswordConfirm) {
          alert("Password does not match.");
      } else {
          this.accountService.changePassword(this.username, this.currentPassword, this.newPassword)
          .then(() => {})
          .catch( r => {
            alert("Unable to update password: " + r);
          })
      }
  }

}
