import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home.BookingComponent } from './home.booking.component';

describe('Home.BookingComponent', () => {
  let component: Home.BookingComponent;
  let fixture: ComponentFixture<Home.BookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home.BookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home.BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
