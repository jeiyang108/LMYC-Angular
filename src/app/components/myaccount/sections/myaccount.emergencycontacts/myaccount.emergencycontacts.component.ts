import { Component, OnInit, Input } from '@angular/core';
import { MyAccountComponent } from '../../myaccount.component';
import { Http } from '@angular/http';
import { AccountService } from '../../../../services/account.service';
import { Router } from '@angular/router';
import { EmergencyContact } from '../../../../models/emergency-contact';

@Component({
  selector: 'my-account-emergency-contacts',
  templateUrl: './myaccount.emergencycontacts.component.html',
  styleUrls: ['./myaccount.emergencycontacts.component.css']
})
export class MyAccountEmergencyContactsComponent implements OnInit {
  @Input() contact: EmergencyContact;

  constructor(){

  }

  ngOnInit() {
  }
  ngOnChange() {
  }

}
