import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home.EventsComponent } from './home.events.component';

describe('Home.EventsComponent', () => {
  let component: Home.EventsComponent;
  let fixture: ComponentFixture<Home.EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home.EventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home.EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
