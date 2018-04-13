import { TestBed, inject } from '@angular/core/testing';

import { ClubmemberService } from './clubmember.service';

describe('ClubmemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubmemberService]
    });
  });

  it('should be created', inject([ClubmemberService], (service: ClubmemberService) => {
    expect(service).toBeTruthy();
  }));
});
