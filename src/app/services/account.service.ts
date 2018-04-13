import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from 'selenium-webdriver/http';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

@Injectable()
export class AccountService {
  private BASE_URL = 'https://localhost:44302/Api/ApplicationUsers/';
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }
  );

  constructor(private http: Http) { }
  
  getUserByName(username: string): Promise<User> {
    let options = new RequestOptions({ headers: this.headers});
    return this.http.get(this.BASE_URL + "/" + username, options)
      .toPromise()
      .then(result => result.json() as User);
  }

  // postBoat(newBoat: Boat): Promise<Boat> {
  //   return this.http.post(this.BASE_URL, JSON.stringify(newBoat))
  //     .toPromise()
  //     .then(result => result.json().data)
  //     .catch(this.handleError);
  // }

  // deleteBoat(delBoat: Boat): Promise<void> {
  //   const url = this.BASE_URL + '/' + delBoat.BoatId;
  //   return this.http.delete(url)
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
