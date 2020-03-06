import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../../../core/services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions;
  question = '';
  answer = '';

  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.questionService.getQuestionJson().subscribe((res) => {
      this.questions = res;
    });
  }

  addQuestion(index) {
    this.questionService.addQuestion(index, this.question, this.answer).subscribe((res) => {
      this.refresh();
    });
  }
}
