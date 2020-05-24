import { Component, OnInit } from '@angular/core';
import { TicketsGQL } from '../../../graphql/graphql-types';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  constructor(private ticketsGQL: TicketsGQL) { }

  ngOnInit(): void {
    this.ticketsGQL.watch().valueChanges.subscribe(
      tickets => console.log(tickets)
    );
  }

}
