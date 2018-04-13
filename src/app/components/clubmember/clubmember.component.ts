import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';
import { User } from '../../models/user';

import { Router } from '@angular/router';
import { ClubMemberService } from '../../services/clubmember.service';

@Component({
  selector: 'clubmember',
  templateUrl: './clubmember.component.html',
  styleUrls: ['./clubmember.component.css'],
  
})

export class ClubmemberComponent implements OnInit {

  constructor(
    private ClubMemberService: ClubMemberService,
    private router: Router
  ) { }

  members: User[];

  getClubMember():void {
    this.ClubMemberService.getClubMembers().then(m => {
      this.members = m;
    });
  }
  ngOnInit() {
    this.getClubMember();
  }

}
