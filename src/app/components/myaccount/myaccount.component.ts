import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-account',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loading: boolean = false;

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

    EmergencyContactName1: string = 'Jane Smith';
    EmergencyContactPhone1: string = '6040000000';
    EmergencyContactName2: string = 'Isaac Toast';
    EmergencyContactPhone2: string = '6040000001';

    //used to retrieve account info of the currenty logged in user.
    retrieveInfo() {
        this.loading = true; //is loading;
    }
}
