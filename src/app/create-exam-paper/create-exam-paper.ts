import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-create-exam-paper',
  templateUrl: './create-exam-paper.html',
  styleUrls: ['./create-exam-paper.scss']
})
export class CreateExamPaperComponent implements OnInit {
  selected = 'option2';
  examId = '12345';
  examName = 'test-name';

  constructor() { }

  ngOnInit(): void {
  }

}
