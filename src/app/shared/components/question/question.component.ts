import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionsService} from '../../../core/services/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() index;
  @Input() question;
  @Output() updated = new EventEmitter();
  questionText = '';
  answer = '';

  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
  }

  addQuestion(index) {
    this.questionService.addQuestion(index, this.questionText, this.answer).subscribe((res) => {
      this.updated.emit(true);
    });
  }

  updateTransfer() {
    this.updated.emit(true);
  }
}
