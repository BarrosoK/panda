import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConversationsComponent} from './list/conversations.component';
import {ViewComponent} from './view/view.component';
import {ConversationResolver} from '../../../core/resolvers/conversation.resolver';


const routes: Routes = [
  {
    path: 'list',
    component: ConversationsComponent
  },
  {
    path: 'view/:id',
    resolve: {
      conversation: ConversationResolver
    },
    component: ViewComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversationsRoutingModule {
}
