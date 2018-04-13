import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/Member';

import { Router } from '@angular/router';
import { MembersService } from '../../services/members.service';
@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  
  constructor(
    private MemService: MembersService,
    private router: Router
  ) { }

  members: Member[];


  getMembers(): void {
    console.log("in getMembers in component");
    this.MemService.getMembers()
      .then(m => {
        this.members = m;
        console.log(this.members);
      });
      console.log(this.members);
  }

  ngOnInit() {
    this.getMembers();
  }
}
