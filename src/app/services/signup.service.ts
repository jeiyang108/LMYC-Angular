import { Injectable } from '@angular/core';
import { SignUp } from '../models/signup';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AppComponent } from '../app.component';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable() 
export class SignUpService {

    constructor(private http: Http, private appComponent: AppComponent) {
    }

    postUser(signup: SignUp): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(AppComponent.url + "/api/Accounts", signup, options)
        .toPromise()
        .then(response => response.json)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

} 