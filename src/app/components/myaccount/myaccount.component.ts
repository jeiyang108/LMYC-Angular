import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'my-account',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyAccountComponent implements OnInit {
  loading: boolean = false;
  user: User;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.displayUserInfo();
  }

  //used to retrieve account info of the currenty logged in user.
  displayUserInfo(): void {
      this.accountService.getUserById("338b5df4-c3ee-42df-9938-c85564cda83a")
        .then(user => {
          this.user = user;
        });
  }
  
}
