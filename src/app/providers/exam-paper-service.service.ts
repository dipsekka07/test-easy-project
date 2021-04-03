import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamPaperService {

  private nextQuestionSource =  new Subject<any>();
  nextQuestion = this.nextQuestionSource.asObservable();

  constructor() { }

  AddQuestionToExamPaper(questionObj: any) {
    this.nextQuestionSource.next(questionObj);
  }

  getExamPaper() {
    
  }
}
