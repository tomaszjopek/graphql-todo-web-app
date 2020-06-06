import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** UUID String */
  UUID: any;
  /** Unrepresentable type */
  UNREPRESENTABLE: any;
};


export enum Priority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

/** Query root */
export type Query = {
  __typename?: 'Query';
  /** Get all tickets */
  tickets?: Maybe<Array<Maybe<Ticket>>>;
  /** Get tickets by state */
  ticketsByState?: Maybe<Array<Maybe<Ticket>>>;
  /** Get ticket by id */
  ticket?: Maybe<Ticket>;
  /** Get user by id */
  user?: Maybe<User>;
  /** Get all users query */
  users?: Maybe<Array<Maybe<User>>>;
};


/** Query root */
export type QueryTicketsByStateArgs = {
  state?: Maybe<State>;
};


/** Query root */
export type QueryTicketArgs = {
  id?: Maybe<Scalars['UUID']>;
};


/** Query root */
export type QueryUserArgs = {
  id?: Maybe<Scalars['UUID']>;
};

export enum State {
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  Todo = 'TODO'
}

export type Ticket = {
  __typename?: 'Ticket';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  priority?: Maybe<Priority>;
  state?: Maybe<State>;
  title?: Maybe<Scalars['String']>;
  /** User which created ticket */
  user?: Maybe<User>;
};


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['UUID']>;
  tickets?: Maybe<Array<Maybe<Ticket>>>;
  username?: Maybe<Scalars['String']>;
};


export type TicketsByStateQueryVariables = {};


export type TicketsByStateQuery = (
  { __typename?: 'Query' }
  & {
  done?: Maybe<Array<Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'title' | 'description'>
    )>>>, todo?: Maybe<Array<Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'title' | 'description'>
    )>>>, in_progress?: Maybe<Array<Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'title' | 'description'>
    )>>>
}
  );

export const TicketsByStateDocument = gql`
    query TicketsByState {
  done: ticketsByState(state: DONE) {
    id
    title
    description
  }
  todo: ticketsByState(state: TODO) {
    id
    title
    description
  }
  in_progress: ticketsByState(state: IN_PROGRESS) {
    id
    title
    description
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class TicketsByStateGQL extends Apollo.Query<TicketsByStateQuery, TicketsByStateQueryVariables> {
  document = TicketsByStateDocument;

}
