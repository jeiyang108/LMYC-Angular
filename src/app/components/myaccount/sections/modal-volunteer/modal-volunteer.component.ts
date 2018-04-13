import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../../../app.component'
import { Http, Response } from '@angular/http';

@Component({
  selector: 'volunteer',
  templateUrl: './modal-volunteer.component.html',
  styleUrls: ['../../myaccount.component.css']
})
export class ModalVolunteerComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }


  ngOnInit() {
  }

}
