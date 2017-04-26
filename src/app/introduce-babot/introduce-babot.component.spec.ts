import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceBabotComponent } from './introduce-babot.component';

describe('IntroduceBabotComponent', () => {
  let component: IntroduceBabotComponent;
  let fixture: ComponentFixture<IntroduceBabotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduceBabotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceBabotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
