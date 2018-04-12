import { Injectable } from '@angular/core';
import { Boat } from '../models/boat';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BoatService {

  private Dummies: Boat[] = [
    {'BoatId':'1','Name':'boat-a','CreditPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'2','Name':'boat-b','CreditPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'3','Name':'boat-c','CreditPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'4','Name':'boat-d','CreditPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'5','Name':'boat-e','CreditPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'6','Name':'boat-f','CreditPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'7','Name':'boat-g','CreditPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'8','Name':'boat-h','CreditPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'9','Name':'boat-i','CreditPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'10','Name':'boat-j','CreditPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'11','Name':'boat-k','CreditPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'12','Name':'boat-l','CreditPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
  ];
  private BASE_URL = 'https://localhost:44302/api/boats';
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '
    }
  );

  constructor(private http: Http) { }

  getDummies(): Boat[] {
      return this.Dummies;
  }

  getBoats(): Promise<Boat[]> {
    return this.http.get(this.BASE_URL)
      .toPromise()
      .then(response => response.json() as Boat[])
      .catch(this.handleError);
  }

  getBoatById(id: string): Promise<Boat> {
    return this.getBoats()
      .then(result => result.find(boat => boat.BoatId === id));
  }

  postBoat(newBoat: Boat): Promise<Boat> {
    return this.http.post(this.BASE_URL, JSON.stringify(newBoat))
      .toPromise()
      .then(result => result.json().data)
      .catch(this.handleError);
  }

  deleteBoat(delBoat: Boat): Promise<void> {
    const url = this.BASE_URL + '/' + delBoat.BoatId;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
