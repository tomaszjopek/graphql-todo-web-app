import { NgModule } from '@angular/core';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoPanelComponent } from './todo-panel/todo-panel.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [TodoDashboardComponent, TodoPanelComponent, TodoCardComponent],
    imports: [
        TodosRoutingModule,
        SharedModule,
        FlexModule,
        MatCardModule
    ]
})
export class TodosModule { }
