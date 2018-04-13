import { Injectable } from '@angular/core';
import { Document } from '../models/Document';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { AppComponent } from '../app.component';


@Injectable()
export class DocumentService {
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }
  );

  constructor(private http: Http) { }

  getDocs(): Promise<Document[]> {
      console.log("In service getDocs")
    let options = new RequestOptions({ headers: this.headers});
    return this.http.get(AppComponent.url + "/api/documents", options)
      .toPromise()
      .then(response => response.json() as Document[])
      .catch(this.handleError);
  }

  getDocById(id: string): Promise<Document> {
    let options = new RequestOptions({ headers: this.headers});
    return this.getDocs()
      .then(result => result.find(d => d.documentId === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}