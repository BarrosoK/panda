import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  conversation = [];

  constructor(private route: ActivatedRoute) {
    this.conversation = this.route.snapshot.data.conversation;
  }

  ngOnInit(): void {
  }

}
