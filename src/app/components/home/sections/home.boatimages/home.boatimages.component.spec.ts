import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home.BoatimagesComponent } from './home.boatimages.component';

describe('Home.BoatimagesComponent', () => {
  let component: Home.BoatimagesComponent;
  let fixture: ComponentFixture<Home.BoatimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home.BoatimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home.BoatimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
