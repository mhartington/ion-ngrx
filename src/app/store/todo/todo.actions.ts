import { Action } from '@ngrx/store';
import { Todo } from '../../model';

export const ADD = '[Todos] Add';
export const REMOVE = '[Todos] Remove';
export const TOGGLE = '[Todos] Toggle';

export class Add implements Action {
  readonly type = ADD;
  constructor(public payload: Partial<Todo>) {}
}

export class Remove implements Action {
  readonly type = REMOVE;
  constructor(public payload: Todo) {}
}

export class Toggle implements Action {
  readonly type = TOGGLE;
  constructor(public payload: Todo) {}
}

export type All = Add | Remove | Toggle;
