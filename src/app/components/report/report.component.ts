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

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.getReports();
    this.getReport("2dd9dbd3-e521-4de7-a50e-8be025d92a82");
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
    this.report.content = "UPDATED";
    console.log(this.report);
    this.reportService.putReport(this.report)
      .then(response => console.log("success"));
  }


}
