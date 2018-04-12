import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { Report } from '../../models/report';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [ReportService]
})
export class ReportComponent implements OnInit {

  report: Report;
  reports: Report[];
  newReport: Report = new Report;

  constructor(private reportService: ReportService) { }

  ngOnInit() {

  }

  getReports() {
    this.reportService.getReports()
    .then(reports => this.reports = reports);
  }

  getReport(id: string) {
    this.reportService.getReport(id)
      .then(report => this.report = report);
  }

  putReport() {
    this.reportService.putReport(this.report)
      .then(response => console.log("success"));
  }

  postReport() {
    this.reportService.postReport(this.newReport)
      .then(response => console.log("success"));
  }

  deleteReport(id: string) {
    this.reportService.deleteReport(id)
      .then(report => console.log("deleted"));
  }


}
