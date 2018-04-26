import { Action } from '@ngrx/store';

export const ADD = '[Todos] Add';
export const REMOVE = '[Todos] Remove';
export const TOGGLE = '[Todos] Toggle';

export class Add implements Action {
  readonly type = ADD;
  constructor(public payload: any) {}
}

export class Remove implements Action {
  readonly type = REMOVE;
  constructor(public payload: any) {}
}

export class Toggle implements Action {
  readonly type = TOGGLE;
  constructor(public payload: any) {}
}

export type All = Add | Remove | Toggle;
