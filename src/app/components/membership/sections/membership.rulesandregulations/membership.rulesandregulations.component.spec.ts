import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipRulesAndRegulationsComponent } from './membership.rulesandregulations.component';

describe('MembershipRulesAndRegulationsComponent', () => {
  let component: MembershipRulesAndRegulationsComponent;
  let fixture: ComponentFixture<MembershipRulesAndRegulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipRulesAndRegulationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipRulesAndRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
