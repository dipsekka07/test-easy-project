import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamPaperComponent } from './create-exam-paper.component';

describe('CreateExamPaperComponent', () => {
  let component: CreateExamPaperComponent;
  let fixture: ComponentFixture<CreateExamPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
