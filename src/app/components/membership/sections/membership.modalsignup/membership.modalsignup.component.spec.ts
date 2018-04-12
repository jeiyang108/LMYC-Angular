import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipModalSignupComponent } from './membership.modalsignup.component';

describe('Membership.ModalsignupComponent', () => {
  let component: MembershipModalSignupComponent;
  let fixture: ComponentFixture<MembershipModalSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipModalSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipModalSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
