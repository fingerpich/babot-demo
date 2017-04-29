import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypistComponent } from './typist.component';

describe('TypistComponent', () => {
  let component: TypistComponent;
  let fixture: ComponentFixture<TypistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
