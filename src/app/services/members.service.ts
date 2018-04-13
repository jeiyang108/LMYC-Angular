import { Injectable } from '@angular/core';
import { Member } from '../models/Member';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class MembersService {
  private BASE_URL = 'https://localhost:44302/api/members';
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }
  );
  constructor(private http: Http) { }

  getMembers(): Promise<Member[]> {
      console.log("In service getMembers")
    let options = new RequestOptions({ headers: this.headers});
    return this.http.get(this.BASE_URL, options)
      .toPromise()
      .then(response => response.json() as Member[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
