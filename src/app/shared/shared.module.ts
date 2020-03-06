import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MaterialModule} from './material/material.module';
import {RouterModule} from '@angular/router';
import { TextBubbleComponent } from './components/text-bubble/text-bubble.component';
import { QuestionComponent } from './components/question/question.component';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [NavigationComponent, TextBubbleComponent, QuestionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavigationComponent,
    TextBubbleComponent,
    QuestionComponent
  ]
})
export class SharedModule { }
