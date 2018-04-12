import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home.AboutComponent } from './home.about.component';

describe('Home.AboutComponent', () => {
  let component: Home.AboutComponent;
  let fixture: ComponentFixture<Home.AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home.AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home.AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
