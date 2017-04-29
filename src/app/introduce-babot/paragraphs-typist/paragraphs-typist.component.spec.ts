import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphsTypistComponent } from './paragraphs-typist.component';

describe('ParagraphsTypistComponent', () => {
  let component: ParagraphsTypistComponent;
  let fixture: ComponentFixture<ParagraphsTypistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphsTypistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphsTypistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
