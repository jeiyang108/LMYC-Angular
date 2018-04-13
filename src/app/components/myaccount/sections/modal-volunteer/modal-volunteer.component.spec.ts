import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVolunteerComponent } from './modal-volunteer.component';

describe('ModalVolunteerComponent', () => {
  let component: ModalVolunteerComponent;
  let fixture: ComponentFixture<ModalVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
