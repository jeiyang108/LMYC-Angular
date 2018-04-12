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
        });
  }
  
}
