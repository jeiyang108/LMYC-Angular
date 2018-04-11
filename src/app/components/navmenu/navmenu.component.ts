import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit() {
  }

  open(loginModal){ 
        this.modal.open(loginModal);
    }

}
