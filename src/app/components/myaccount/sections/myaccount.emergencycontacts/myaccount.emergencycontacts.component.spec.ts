import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountEmergencyContactsComponent } from './myaccount.emergencycontacts.component';

describe('Myaccount.EmergencycontactsComponent', () => {
  let component: MyAccountEmergencyContactsComponent;
  let fixture: ComponentFixture<MyAccountEmergencyContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountEmergencyContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountEmergencyContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
