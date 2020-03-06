import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get<any>(`${environment.apiUrl}/questions/`).pipe(
      map(res => res.questions)
    );
  }

  addQuestion(path, question, answer) {
    return this.http.post(`${environment.apiUrl}/questions/add`, {path, question, answer});
  }

  getQuestionJson() {
    return this.http.get(`${environment.apiUrl}/questions/all`);
  }

  ask(path?: number[]) {
    return this.http.post<any>(`${environment.apiUrl}/questions/`, {id: path});
  }

  getConversations(filter: {}, sortDirection: number,  pageIndex: number, pageSize: number) {
    return this.http.get(`${environment.apiUrl}/questions/conversations`, {
      params: new HttpParams()
        .set('filter', JSON.stringify(filter))
        .set('order', sortDirection.toString())
        .set('pageIndex', pageIndex.toString())
        .set('pageSize', pageSize.toString())
    });
  }

  getConversation(id) {
    return this.http.get<any>(`${environment.apiUrl}/questions/conversation/${id}`);
  }

  deleteConversation(id) {
    return this.http.delete(`${environment.apiUrl}/questions/conversation/${id}`);
  }
}
