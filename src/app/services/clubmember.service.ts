import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { AppComponent } from '../app.component';

@Injectable()
export class ClubMemberService {
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }
  );
  constructor(private http: Http) { }

  getClubMembers(): Promise<User[]> {
      console.log("In service getMembers")
    let options = new RequestOptions({ headers: this.headers});
    return this.http.get(AppComponent.url + "/api/ApplicationUsers", options)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
