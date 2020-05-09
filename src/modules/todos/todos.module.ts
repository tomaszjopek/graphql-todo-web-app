import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoPanelComponent } from './todo-panel/todo-panel.component';
import { TodoCardComponent } from './todo-card/todo-card.component';



@NgModule({
  declarations: [TodoDashboardComponent, TodoPanelComponent, TodoCardComponent],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
