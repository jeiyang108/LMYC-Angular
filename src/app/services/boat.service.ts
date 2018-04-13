import { Injectable } from '@angular/core';
import { Boat } from '../models/boat';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AppComponent } from '../app.component';

@Injectable()
export class BoatService {
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }
  );
  selectedBoatId: string;
  constructor(private http: Http) { }

  getBoats(): Promise<Boat[]> {
    let options = new RequestOptions({ headers: this.headers});
    return this.http.get(AppComponent.url + "/api/boats", options)
      .toPromise()
      .then(response => response.json() as Boat[])
      .catch(this.handleError);
  }

  // No one uses this
  getBoatById(id: string): Promise<Boat> {
    let options = new RequestOptions({ headers: this.headers});
    return this.getBoats()
      .then(result => result.find(boat => boat.BoatId === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
