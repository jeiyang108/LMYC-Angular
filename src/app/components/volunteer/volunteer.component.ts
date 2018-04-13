import { Component, OnInit } from '@angular/core';
import { ClassificationCode } from '../../models/classification-code';
import { Report } from '../../models/report';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { AppComponent } from '../../app.component';
import { ReportService } from '../../services/report.service';
import { ClassificationcodeService } from '../../services/classificationcode.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
  providers: [ReportService, ClassificationcodeService]
})
export class VolunteerComponent implements OnInit {

  report: Report;
  classCodes: ClassificationCode[] = new Array();

  ngOnInit() {
    this.report = new Report();
    this.report.dateCreated = new Date();
    this.loadClassCodes();
  }

  constructor(private fb: FormBuilder,
    private reportService: ReportService,
    private classService: ClassificationcodeService)
  {
    this.report = new Report();
    this.report.dateCreated = new Date(); // This prevents a console error for reading a null date
  }

  loadClassCodes() {
    this.classService.getClassCodes()
    .then(classCodes => this.classCodes = classCodes);
  }

  // volunteerForm = new FormGroup ({
  //   volunteerDate: new FormControl(),
  //   volunteerHours: new FormControl(),
  //   volunteerDesc: new FormControl()
  // });

  // createForm() {
  //   this.volunteerForm = this.fb.group({
  //     volunteerDate: ['', Validators.required],
  //     volunteerHours: ['', Validators.required],
  //     volunteerDesc: ['', Validators.required],
  //   })
  // }
  newReport() {
    console.log(AppComponent.url);

    this.reportService.postReport(this.report)
      .then(response => console.log('success'));
  }
}
