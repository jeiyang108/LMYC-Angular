import { Injectable } from '@angular/core';
import { Boat } from '../models/boat';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BoatService {

  private Dummies: Boat[] = [
    {"BoatId":"00001","Name":"a","CreditPerHour":5,"Status":"a","Photo":undefined,"Description":"a","Length":5,"Make":"a","Year": 5},
    {"BoatId":"00002","Name":"a","CreditPerHour":5,"Status":"a","Photo":undefined,"Description":"a","Length":5,"Make":"a","Year": 5},
    {"BoatId":"00003","Name":"a","CreditPerHour":5,"Status":"a","Photo":undefined,"Description":"a","Length":5,"Make":"a","Year": 5},
    {"BoatId":"00004","Name":"a","CreditPerHour":5,"Status":"a","Photo":undefined,"Description":"a","Length":5,"Make":"a","Year": 5},
  ]
  private BASE_URL = 'https://localhost:44355/api/boats';
  private headers = new Headers(
    {'Content-Type': 'application/json'}, 
    {'Authorization': 'Bearer '}
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
    let url = this.BASE_URL + '/' + delBoat.BoatId;
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
