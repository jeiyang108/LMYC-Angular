import { Injectable } from '@angular/core';
import { Boat } from '../models/boat';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BoatService {
  private BASE_URL = 'https://localhost:44302/api/boats';
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }
  );

  constructor(private http: Http) { }

  getBoats(): Promise<Boat[]> {
    let options = new RequestOptions({ headers: this.headers});
    return this.http.get(this.BASE_URL, options)
      .toPromise()
      .then(response => response.json() as Boat[])
      .catch(this.handleError);
  }

  getBoatById(id: string): Promise<Boat> {
    let options = new RequestOptions({ headers: this.headers});
    return this.getBoats()
      .then(result => result.find(boat => boat.BoatId === id));
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
