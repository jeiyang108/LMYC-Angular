import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from 'selenium-webdriver/http';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from '../app.component';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService {
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }
  );

  constructor(private http: Http) { }
  
  getUserByName(username: string): Observable<any> {
    let options = new RequestOptions({ headers: this.headers});
    return this.http.get(AppComponent.url + "/api/applicationusers/" + username, options)
      .map(res => <User>res.json())
      .catch(this.handleError);
  }

  updateUserInfo(updatedUserInfo: User): Promise<Response> {
    console.log("New Data: " + updatedUserInfo.userName);
    let options = new RequestOptions({ headers: this.headers});
    const url = AppComponent.url + "/api/applicationusers/" + updatedUserInfo.userName;
    return this.http.put(url, JSON.stringify(updatedUserInfo), options) // JSON.stringify(newUser), options
      .toPromise()
      .then();
  }

  changePassword(username: string, currentPassword: string, newPassword: string) {
    let options = new RequestOptions({ headers: this.headers});

    let changeRequest = {
      CurrentPassword: currentPassword,
      NewPassword: newPassword
    };

    const url = AppComponent.url + "/api/applicationusers/" + username;
    return this.http.patch(url, JSON.stringify(changeRequest), options) // JSON.stringify(newUser), options
      .toPromise()
      .then();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
