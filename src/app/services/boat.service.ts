import { Injectable } from '@angular/core';
import { Boat } from '../models/boat';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BoatService {

  private Dummies: Boat[] = [
    {'BoatId':'1','Name':'boat-a','CreditsPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'2','Name':'boat-b','CreditsPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'3','Name':'boat-c','CreditsPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'4','Name':'boat-d','CreditsPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'5','Name':'boat-e','CreditsPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'6','Name':'boat-f','CreditsPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'7','Name':'boat-g','CreditsPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'8','Name':'boat-h','CreditsPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'9','Name':'boat-i','CreditsPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'10','Name':'boat-j','CreditsPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'11','Name':'boat-k','CreditsPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
    {'BoatId':'12','Name':'boat-l','CreditsPerHour':5,'Status':'a','Photo':undefined,'Description':'_aDescription','Length':5,'Make':'a','Year': 5},
  ];
  private BASE_URL = 'https://localhost:44302/api/boats';
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }
  );

  constructor(private http: Http) { }

  getDummies(): Boat[] {
      return this.Dummies;
  }

  getBoats(): Promise<Boat[]> {
    let options = new RequestOptions({ headers: this.headers});
    return this.http.get(this.BASE_URL, options)
      .toPromise()
      .then(response => response.json() as Boat[] )
      .then(r => console.log(r))
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
