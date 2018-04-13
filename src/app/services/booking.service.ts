import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Booking } from '../models/booking';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AppComponent } from '../app.component';

@Injectable()
export class BookingService {

  constructor(private http: Http, private appComponent: AppComponent) { }

  getBookings(): Promise<Booking[]> {
    let headers = new Headers({
      'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(AppComponent.url + '/api/Bookings', options)
      .toPromise()
      .then(response => response.json() as Booking[])
      .catch(this.handleError);
  }

  getBookingByBookingId(id: string): Promise<Booking> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(AppComponent.url + '/api/Bookings/' + id, options)
      .toPromise()
      .then(response => response.json() as Booking)
      .catch(this.handleError);
  }

  getBookingByBoatId(id: string): Promise<Booking> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(AppComponent.url + '/api/Bookings/' + id, options)
      .toPromise()
      .then(response => response.json() as Booking)
      .catch(this.handleError);
  }

  getBookingsByUserId(id: string): Promise<Booking[]> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(AppComponent.url + '/api/Bookings/' + id, options)
      .toPromise()
      .then(response => response.json() as Booking[])
      .catch(this.handleError);
  }

  putBooking(booking: Booking): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(AppComponent.url + '/api/Bookings/' + booking.bookingId, booking, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  postBooking(booking: Booking): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(AppComponent.url + '/api/Bookings' , booking, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  deleteBooking(id: string): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(AppComponent.url + '/api/Bookings/' + id, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getAvailableStartTimes(boatId: string, selectedDate: Date): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(AppComponent.url + '/api/Bookings/' + boatId + '/' + selectedDate.toISOString())
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getAvailableEndTimes(boatId: string, selectedDate: Date, startTime: Date): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(AppComponent.url + '/api/Bookings/' + boatId + '/' + selectedDate.toISOString() + '/' + startTime.toISOString())
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
