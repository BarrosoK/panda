import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {QuestionsService} from '../services/questions.service';

@Injectable({
  providedIn: 'root',
})
export class ConversationResolver implements Resolve<any> {
  constructor(private questionsService: QuestionsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params.id;
    return this.questionsService.getConversation(id);
  }
}
