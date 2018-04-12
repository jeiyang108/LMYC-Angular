import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit {
  private authenticated: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  	this.refresh();
  }

  logout() {
    sessionStorage.setItem("authenticated", "false");
    sessionStorage.removeItem("acess_token");
    location.reload();
    this.router.navigate(['/home/']);
  }

  refresh() {
    if (sessionStorage.getItem("authenticated") == "true") {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }
}
