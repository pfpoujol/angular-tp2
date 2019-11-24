import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCbComponent } from './dialog-cb.component';

describe('DialogCbComponent', () => {
  let component: DialogCbComponent;
  let fixture: ComponentFixture<DialogCbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
