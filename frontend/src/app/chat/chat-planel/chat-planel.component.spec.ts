import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPlanelComponent } from './chat-planel.component';

describe('ChatPlanelComponent', () => {
  let component: ChatPlanelComponent;
  let fixture: ComponentFixture<ChatPlanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPlanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPlanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
