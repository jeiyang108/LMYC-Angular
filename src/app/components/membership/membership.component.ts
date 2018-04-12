import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit() {
  }

  openSignup(signupModal){ 
    this.modal.open(signupModal, { size: 'lg' });
}

}
