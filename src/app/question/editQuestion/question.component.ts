import { Component, Input, OnInit } from '@angular/core';
import { iquesType } from '../../common/constants';
import { UtilityService } from '../../common/utility.service';
import { ExamPaperService } from "../../providers/exam-paper-service.service"

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class EditQuestionComponent implements OnInit {
@Input() quesType: any;
@Input() quesNo: number;
isMCQ: boolean;
possibleAns: any[] = [];
nextCharacter : string = 'A';
option: string;
isCurrentEditable= true;
question = '';
saveString = 'SAVE';

  constructor( private utility: UtilityService, 
               private examService: ExamPaperService) { }

  ngOnInit(): void {
    this.isMCQ = this.quesType === iquesType.MCQ ? true : false;
  }

  addOption(option) {
      this.possibleAns.push({ id : this.nextCharacter , option: option});
      this.nextCharacter = this.utility.nextChar(this.nextCharacter);
  }

  saveQuestion() {
    const question = this.question;
    const options = this.possibleAns;
    const correctAns = '';
    const quesObj = { question, quesId: this.quesNo, quesType: this.quesType, options, correctAns };
    this.examService.AddQuestionToExamPaper(quesObj);
    this.saveString = "SAVED";
  }

  removeOption(option) {
    this.possibleAns = this.possibleAns.filter(function(item) {
      return item.id !== option.id;
    });
    this.renumberTheOptions(option);
  }

  renumberTheOptions(option) {
    let isAnyNumGreater = false;
    this.possibleAns = this.possibleAns.map( res => {
      const isGreaterChar = this.utility.greaterChar(res.id, option.id)
      if(isGreaterChar) {
        this.nextCharacter = res.id;
        res.id = this.utility.prevChar(res.id);
        isAnyNumGreater = true;
      }
      return res;
    });
    this.nextCharacter = isAnyNumGreater ? this.nextCharacter : option.id;
  }
}
