import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AppComponent } from '../app.component';
import { Report } from '../models/report';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportService {

  constructor(private http: Http, private appComponent: AppComponent) {
  }

  getReports(): Promise<Report[]> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(AppComponent.url + '/api/Reports', options)
      .toPromise()
      .then(response => 
        response.json() as Report[]
      )
      .catch(this.handleError);
  }

  getReport(id: string): Promise<Report> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + sessionStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(AppComponent.url + '/api/Reports/' + id, options)
      .toPromise()
      .then(response =>
        response.json() as Report
      )
      .catch(this.handleError);
  }

  putReport(report: Report): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(AppComponent.url + '/api/Reports/' + report.reportID, report, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  postReport(report: Report): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(AppComponent.url + '/api/Reports', report, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
