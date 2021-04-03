import { Component, OnInit } from '@angular/core';
import { iquesType } from '../common/constants';
import { ExamPaperService } from '../providers/exam-paper-service.service';

@Component({
  selector: 'app-create-exam-paper',
  templateUrl: './create-exam-paper.html',
  styleUrls: ['./create-exam-paper.scss']
})
export class CreateExamPaperComponent implements OnInit {
  examId = '12345';
  examName = 'test-name';
  selectedType = '';
  questionTypes = [];
  currentQuesNo = 0;
  items = [];
  examObj= [];

  constructor( private examService: ExamPaperService) { 
    this.questionTypes = [
      {id: 1, name: iquesType.MCQ },
      {id: 2, name: iquesType.Subjective}
    ];
    this.selectedType = this.questionTypes[0];
  }

  ngOnInit(): void {
    this.examService.nextQuestion.subscribe(result => {
      const index = this.examObj.findIndex(e => e.id == result.id);
      if(this.examObj.length === 0   || index == -1)
        this.examObj.push(result); // this set's the username to the default observable value
      //console.log("examObj"+ this.examObj.toString());
    });
  }

  addQuestion(quesType: any) : void {
    const quesNo = ++this.currentQuesNo;
    const quesTyp = quesType.name;
    this.items.push({ quesNo, quesTyp});
  }

  // it will increment question no.
}

