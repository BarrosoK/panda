import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../../core/services/questions.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questions;
  conversation = [];
  path = [];
  answer = '';

  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.reset();
  }

  ask(question: string, id: number) {
    if (question === null && id === null) {
      if (this.path.length === 1) {
        return this.reset();
      }
      this.path.pop();
      this.conversation.splice(this.conversation.length - 3, 3);
    } else {
      this.path.push(id);
      this.conversation.push({text: question, author: 'me'});
    }
    this.questions = this.questionService.ask(this.path).pipe(
      tap((res) => {
        this.conversation.push({text: res.answer,  author: 'bot'});
        this.path = res.path;
      }),
      map(res => res.sub)
    );
  }

  reset() {
    this.questions = this.questionService.getQuestions();
    this.conversation = [];
    this.path = [];
  }

  back() {
    this.ask(null, null);
  }
}
