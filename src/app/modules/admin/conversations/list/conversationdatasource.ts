import { DataSource } from '@angular/cdk/collections';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject, of } from 'rxjs';
import {QuestionsService} from '../../../../core/services/questions.service';

export class Conversationdatasource extends DataSource<any> {
  private gameObject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private totalElement = 0;
  public loading$ = this.loadingSubject.asObservable();

  constructor(private questionsService: QuestionsService) {
    super();
  }

  connect(): Observable<any[]> {
    return this.gameObject.asObservable();
  }

  disconnect() {
    this.gameObject.complete();
    this.loadingSubject.complete();
  }

  loadConversations(filter = {}, sortDirection = 1, sortName = 'createdAt', pageIndex = 0, pageSize = 25) {
    this.loadingSubject.next(true);
    this.questionsService
      .getConversations(filter, sortDirection, pageIndex, pageSize)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false)),
      )
      .subscribe(async (res: any) => {
        this.totalElement = res.total;
        return this.gameObject.next(res);
      });
  }

  getTotalElement() {
    return this.totalElement;
  }
}
