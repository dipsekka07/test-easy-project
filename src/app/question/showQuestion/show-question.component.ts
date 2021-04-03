import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.scss']
})
export class ShowQuestionComponent implements OnInit {
  @Input() quesObj : any; 
  @Input() serialNo: number;

  constructor() { }

  ngOnInit(): void {
  }

  changeOptions() {

    console.log(this.quesObj+ "--");
  }

}
