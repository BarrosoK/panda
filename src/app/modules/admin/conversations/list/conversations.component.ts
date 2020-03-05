import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Conversationdatasource} from './conversationdatasource';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionsService} from '../../../../core/services/questions.service';
import * as moment from 'moment';
import {fromEvent, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit, AfterViewInit {

  moment = moment;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: Conversationdatasource;
  displayedColumns = ['path', 'createdAt', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
  ) {}

  ngOnInit() {
    this.dataSource = new Conversationdatasource(this.questionsService);
    this.dataSource.loadConversations();
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadConversations()))
      .subscribe();
  }

  loadConversations() {
    const filterValue: any = {};
    this.dataSource.loadConversations(
      filterValue,
      this.sort.direction === 'asc' ? -1 : 1,
      this.sort.active,
      this.paginator.pageIndex,
      this.paginator.pageSize,
    );
  }


  public delete(id) {
    this.questionsService.deleteConversation(id).subscribe((res) => {
      this.loadConversations();
    });
  }

  view(id) {
    console.log('gogo');
    this.router.navigateByUrl(`/admin/conversation/view/${id}`);
  }
}
