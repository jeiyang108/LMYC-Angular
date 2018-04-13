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
  emergencyContact: EmergencyContact;
  username: string = sessionStorage.getItem("username");

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.displayUserInfo();
  }

  //used to retrieve account info of the currenty logged in user.
  displayUserInfo(): void {
      this.accountService.getUserByName(this.username)
        .then(user => {
          this.user = user;
          console.log(user);
          this.emergencyContact = new EmergencyContact();
          this.emergencyContact.name1 = user.emergencyContacts.name1;
          this.emergencyContact.name2 = user.emergencyContacts.name2;
          this.emergencyContact.phone1 = user.emergencyContacts.phone1;
          this.emergencyContact.phone2 = user.emergencyContacts.phone2;
          console.log(this.emergencyContact);
        });
  }
  
}
