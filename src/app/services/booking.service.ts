import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Booking } from '../models/booking';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingService {

  private BASE_URL = 'https://localhost:57836/api/Bookings';

  constructor(private http: Http) { }

  getBookings(): Promise<Booking[]> {
    let headers = new Headers({

      'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.BASE_URL, options)
      .toPromise()
      .then(response => response.json() as Booking[])
      .catch(this.handleError);
  }

  getBookingById(id: string): Promise<Booking> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.BASE_URL + id, options)
      .toPromise()
      .then(response => response.json() as Booking[])
      .catch(this.handleError);
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
