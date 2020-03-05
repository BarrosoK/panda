import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MaterialModule} from './material/material.module';
import {RouterModule} from '@angular/router';
import { TextBubbleComponent } from './components/text-bubble/text-bubble.component';




@NgModule({
  declarations: [NavigationComponent, TextBubbleComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavigationComponent,
    TextBubbleComponent
  ]
})
export class SharedModule { }
