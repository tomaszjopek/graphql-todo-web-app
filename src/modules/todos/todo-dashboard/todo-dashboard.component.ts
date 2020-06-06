import { Component, OnInit } from '@angular/core';
import { Ticket, TicketsByStateGQL, TicketsByStateQuery } from '../../../graphql/graphql-types';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  private tickets: Observable<ApolloQueryResult<TicketsByStateQuery>>;

  constructor(private ticketsGQL: TicketsByStateGQL) { }

  ngOnInit(): void {
    this.tickets = this.ticketsGQL.watch().valueChanges;

    this.tickets.subscribe(result => console.log(result));
  }

}
