import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationsRoutingModule } from './conversations-routing.module';
import {ExtendedModule, FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {ConversationsComponent} from './list/conversations.component';
import {SharedModule} from '../../../shared/shared.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [ConversationsComponent, ViewComponent],
  imports: [
    CommonModule,
    ConversationsRoutingModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class ConversationsModule { }
