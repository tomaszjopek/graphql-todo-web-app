import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: TodoDashboardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TodosRoutingModule { }
