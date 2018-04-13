import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AppComponent } from '../app.component';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable() 
export class UserService {

    constructor(private http: Http, private appComponent: AppComponent) {
    }
    
    register(newUser: User) {
        console.log(newUser);
        if (!newUser.UserName || !newUser.Password) {
          return;
        }
        let options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});
    
        return this.http.post(AppComponent.url + "/api/Accounts/register", JSON.stringify(newUser), options)
          .map(res => {
            return res.json();
          }).catch(this.handleError);
      }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
} 