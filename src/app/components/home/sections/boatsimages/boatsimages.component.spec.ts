import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatsimagesComponent } from './boatsimages.component';

describe('BoatsimagesComponent', () => {
  let component: BoatsimagesComponent;
  let fixture: ComponentFixture<BoatsimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatsimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatsimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
