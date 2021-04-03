import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExamPaperComponent } from './show-exam-paper.component';

describe('ShowExamPaperComponent', () => {
  let component: ShowExamPaperComponent;
  let fixture: ComponentFixture<ShowExamPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowExamPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowExamPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
