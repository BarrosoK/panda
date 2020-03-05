import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavigationComponent} from './shared/components/navigation/navigation.component';
import {HomeComponent} from './modules/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'admin',
        loadChildren: './modules/admin/admin.module#AdminModule'
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
