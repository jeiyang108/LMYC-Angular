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
  user: User;
  changedUser: User;
  emergencyContact: EmergencyContact;
  changedEmergencyContact: EmergencyContact;

  username: string = sessionStorage.getItem("username");
  retrievedInfo: any;

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
        .then((user : any) => {
          this.user = this.convertToUppercase(user);
          this.changedUser = this.convertToUppercase(user);

          this.retrievedInfo = user;
          console.log(user);
          this.emergencyContact = new EmergencyContact();
          this.emergencyContact.Name1 = user.emergencyContacts.name1;
          this.emergencyContact.Name2 = user.emergencyContacts.name2;
          this.emergencyContact.Phone1 = user.emergencyContacts.phone1;
          this.emergencyContact.Phone2 = user.emergencyContacts.phone2;

          
          this.changedEmergencyContact = new EmergencyContact();
          this.changedEmergencyContact.Name1 = user.emergencyContacts.name1;
          this.changedEmergencyContact.Name2 = user.emergencyContacts.name2;
          this.changedEmergencyContact.Phone1 = user.emergencyContacts.phone1;
          this.changedEmergencyContact.Phone2 = user.emergencyContacts.phone2;
          console.log(this.emergencyContact);
        });
  }
  
  updateUserInfo(): void {
      this.changedUser.EmergencyContacts = this.changedEmergencyContact;
      this.accountService.updateUserInfo(this.changedUser).then( () => {
        this.displayUserInfo();
      }).catch( () => {
        alert("Validation failed.");
      });
  }
  
}
