import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as data from '../dummy.json';

@Component({
  selector: 'app-show-exam-paper',
  templateUrl: './show-exam-paper.component.html',
  styleUrls: ['./show-exam-paper.component.scss']
})
export class ShowExamPaperComponent implements OnInit {
  examData: any;
  examQues: any[];
p
  constructor( private detectRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.examData = data['default'];
    this.examQues = this.examData.examObj;
    console.log(data);

  }

}
