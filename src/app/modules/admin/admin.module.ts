import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {ConversationsModule} from './conversations/conversations.module';
import { QuestionsComponent } from './questions/questions.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, QuestionsComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ConversationsModule,
        SharedModule,
        FlexModule,
        FormsModule,
    ]
})
export class AdminModule { }
