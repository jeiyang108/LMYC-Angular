import { Component, OnInit } from '@angular/core';
import { Document } from '../../models/Document';

import { Router } from '@angular/router';
import { DocumentService } from '../../services/document.service';
import * as FileSaver from "file-saver";
import 'rxjs/Rx' ;
@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
  providers: [DocumentService]
})
export class DocumentComponent implements OnInit {

  constructor(
    private DocService: DocumentService,
    private router: Router
  ) { }

  docs: Document[];
  doc: Document;

  getDocs(): void {
    console.log("in getDocs in component");
    this.DocService.getDocs()
      .then(d => {
        this.docs = d;
        console.log(this.docs);
      });
      console.log(this.docs);
  }

  downloadFile(id: string) {
    console.log("In Download function");
    console.log(id);

    this.DocService.getDocById(id).then(d=>{
      this.doc = d;
      console.log("Inside DocServices: " + this.doc);
      var blob = new Blob([this.doc.content], { type: this.doc.contentType });
      console.log(blob);
      FileSaver.saveAs(blob,this.doc.documentName);
    });

  }
  getDoc(id: string) {

  }

  ngOnInit() {
    this.getDocs();
  }

  loadDocuments() {

  }

}
