import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';
import { Todo } from '../model';

export interface AppState {
  todos: Array<Todo>;
}

export const appDefaultState: AppState = {
  todos: fromTodo.defaultState
};

// map all the core (not feature) reducers
export const APP_REDUCERS: ActionReducerMap<AppState> = {
  todos: fromTodo.todosReducer
};
