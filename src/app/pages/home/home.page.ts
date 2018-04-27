import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../actions';
import { Todo } from '../../model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  // Observable based class members are suffixed with a $
  // to mark that they reactive
  public todos$: Observable<Todo>;

  public newTodo = null;
  @ViewChild('todoList') todoList: any;

  constructor(private store: Store<any>) {}
  ngOnInit() {
    this.todos$ = this.store.select('todos');
  }
  addTodo() {
    this.store.dispatch(
      new TodoActions.Add({ text: this.newTodo, completed: false })
    );
    this.newTodo = null;
  }
  removeTodo(todo: Todo) {
    this.store.dispatch(new TodoActions.Remove(todo));
  }
  toggleTodo(todo) {
    this.todoList.nativeElement.closeSlidingItems();
    this.store.dispatch(new TodoActions.Toggle(todo));
  }
}
