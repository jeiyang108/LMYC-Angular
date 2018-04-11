import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-account',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyAccountComponent implements OnInit {
  Loading: boolean = false;

  Username: string = 'jsmith12';
  FirstName: string = 'John';
  LastName: string = 'Smith';
  MemberStatus: string = 'Full Memeber';
  SkipperStatus: string = 'Crew';
  Street: string = '123 LaLa St';
  City: string = 'Vancouver';
  Province: string = 'BC';
  Country: string = 'Canada';
  PostalCode: string = 'V1C1A1';
  MobilePhone: string = '7781111111';
  HomePhone: string = '7782222222';
  WorkPhone: string = '7782222222';
  Credits: number = 111;
  SailingQualifications: string = 'n/a';
  Skills: string = 'n/a';
  SailingExeprience: string = 'n/a';

  EmergencyContact1Name: string = 'Jane Smith';
  EmergencyContact1Phone: string = '6040000000';
  EmergencyContact2Name: string = 'Isaac Toast';
  EmergencyContact2Phone: string = '6040000001';

  //used to retrieve account info of the currenty logged in user.
  retrieveInfo() {
      this.Loading = true; //is loading;
  }
  constructor() { }

  ngOnInit() {
  }

}
