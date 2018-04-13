import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  private authenticated: boolean;

  constructor(private modal:NgbModal) { }

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

  openSignup(signupModal){ 
    this.modal.open(signupModal, { size: 'lg' });
}

}
