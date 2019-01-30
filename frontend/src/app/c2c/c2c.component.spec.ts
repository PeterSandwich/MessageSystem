import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2cComponent } from './c2c.component';

describe('C2cComponent', () => {
  let component: C2cComponent;
  let fixture: ComponentFixture<C2cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
