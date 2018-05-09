import * as TodoActions from './todo.actions';
import { Todo } from '../../model';

export const defaultState = [];

const newTodo = (state, payload) => [...state, { ...payload, id: Date.now() }];
const removeTodo = (state, payload) => state.filter(e => e.id !== payload.id);
const toggleTodo = (state, payload) =>
  state.map(
    todo =>
      todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
  );

export function todosReducer(state: Array<Todo> = defaultState, action: TodoActions.All) {
  switch (action.type) {
    case TodoActions.ADD:
      return newTodo(state, action.payload);

    case TodoActions.REMOVE:
      return removeTodo(state, action.payload);

    case TodoActions.TOGGLE:
      return toggleTodo(state, action.payload);

    default:
      return state;
  }
}
