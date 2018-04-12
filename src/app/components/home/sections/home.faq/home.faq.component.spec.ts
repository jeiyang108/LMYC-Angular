import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home.FaqComponent } from './home.faq.component';

describe('Home.FaqComponent', () => {
  let component: Home.FaqComponent;
  let fixture: ComponentFixture<Home.FaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home.FaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home.FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
