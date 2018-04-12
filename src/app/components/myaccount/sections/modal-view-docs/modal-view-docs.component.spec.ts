import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewDocsComponent } from './modal-view-docs.component';

describe('ModalViewDocsComponent', () => {
  let component: ModalViewDocsComponent;
  let fixture: ComponentFixture<ModalViewDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalViewDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalViewDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
