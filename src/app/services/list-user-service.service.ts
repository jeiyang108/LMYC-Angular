import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AppComponent } from '../app.component';
import { Member } from '../models/member';
import { Observable } from 'rxjs';

@Injectable()
export class ListUserServiceService {

  constructor(private http: Http, private appComponent: AppComponent) { }

  getUsers(): Observable<Member[]> {
    let headers = new Headers({
      'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(AppComponent.url + '/api/ApplicationUsers', options)
      .map(function(res) {
        var data = res.json();
        var members = new Array<Member>();
        for (var i=0; i<data.length; i++)
        {
          members.push( { bookingId:null,userId:data[i].id, name:data[i].firstName + ' ' + data[i].lastName, allocatedCredits:0 } as Member);
        }
        console.log(members);
        return members;
      }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
