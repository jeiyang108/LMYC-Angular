import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  private authenticated: boolean;

  constructor() { }

  ngOnInit() {
  	this.refresh();
  }

  refresh() {
    if (sessionStorage.getItem("authenticated") == "true") {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }

}
