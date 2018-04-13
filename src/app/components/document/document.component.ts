import { Component, OnInit } from '@angular/core';
import { Document } from '../../models/Document';

import { Router } from '@angular/router';
import { DocumentService } from '../../services/document.service';
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


  getDocs(): void {
    console.log("in getDocs in component");
    this.DocService.getDocs()
      .then(d => {
        this.docs = d;
        console.log(this.docs);
      });
      console.log(this.docs);
  }

  ngOnInit() {
    this.getDocs();
  }

  loadDocuments() {

  }

}
