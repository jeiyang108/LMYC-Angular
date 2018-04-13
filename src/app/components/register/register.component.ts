import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: User;

  constructor(
  	private router: Router
  ) { }

  addUser(newUser: User) {

  }

  ngOnInit() {
  }

}
