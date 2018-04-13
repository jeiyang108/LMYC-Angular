import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AppComponent } from '../app.component';
import { Report } from '../models/report';
import { ClassificationCode } from '../models/classification-code';

@Injectable()
export class ClassificationcodeService {

  constructor(private http: Http) {
  }

  getClassCodes(): Promise<ClassificationCode[]> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(AppComponent.url + '/api/classificationcodes', options)
      .toPromise()
      .then(response => 
        response.json() as ClassificationCode[]
      )
      .catch(this.handleError);
  }

  getClassCode(id: string): Promise<ClassificationCode> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(AppComponent.url + '/api/classificationcodes/' + id, options)
      .toPromise()
      .then(response =>
        response.json() as ClassificationCode
      )
      .catch(this.handleError);
  }

  putClassCodes(report: Report): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(AppComponent.url + '/api/classificationcodes/' + report.reportID, report, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  postClassCodes(report: Report): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(AppComponent.url + '/api/classificationcodes', report, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  deleteClassCodes(id: string): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(AppComponent.url + '/api/classificationcodes/' + id, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
