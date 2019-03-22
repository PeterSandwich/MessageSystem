import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPlanelComponent } from './info-planel.component';

describe('InfoPlanelComponent', () => {
  let component: InfoPlanelComponent;
  let fixture: ComponentFixture<InfoPlanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPlanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPlanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
