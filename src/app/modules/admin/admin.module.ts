import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import {FlexModule} from '@angular/flex-layout';
import {ConversationsModule} from './conversations/conversations.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ConversationsModule,
    SharedModule,
    FlexModule
  ]
})
export class AdminModule { }
