import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component'

@Component({
    selector: 'login',
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username: string;
    password: string;

    constructor(
      private http: Http,
      private router: Router,
      private modal: NgbModal) { }

    ngOnInit() {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("authenticated");
    }

    login() {
        this.authenticate()
            .subscribe(authenticated => {
                if (authenticated === true) {
                    location.reload();
                    this.router.navigate(['/home/']);
                }
            });
    }

    authenticate() {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let body = "username=" + this.username + "&password=" + this.password + "&grant_type=password";
        let options = new RequestOptions({ headers: headers });

        return this.http.post(AppComponent.url + "/connect/token/", body, options)
            .map((response: Response) => {
                if (response.json().access_token) {
                    sessionStorage.setItem("username", this.username);
                    sessionStorage.setItem("access_token", response.json().access_token);
                    sessionStorage.setItem("authenticated", "true");

                    return true;
                } else {
                    alert("Authentication failed.")

                    return false;
                }
            })/*.catch((err: Response) => {
                alert(err.json().error_description);
                return Observable.throw(new Error(err.json().error));
            })*/;
    }
}