import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubmemberComponent } from './clubmember.component';

describe('ClubmemberComponent', () => {
  let component: ClubmemberComponent;
  let fixture: ComponentFixture<ClubmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
