import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosRoutingModule } from '../modules/todos/todos-routing.module';


const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () => import('../modules/todos/todos.module').then(todoModule => todoModule.TodosModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TodosRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
