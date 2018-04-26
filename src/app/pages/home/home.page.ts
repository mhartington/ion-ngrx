import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../actions';
@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public todos;
  public newTodo = null;
  @ViewChild('todoList') todoList: any;
  constructor(private store: Store<any>) {}
  ngOnInit() {
    this.todos = this.store.select('todos');
  }
  add() {
    this.store.dispatch(new TodoActions.Add('test'));
  }
  addTodo() {
    this.store.dispatch(
      new TodoActions.Add({ text: this.newTodo, completed: false })
    );
    this.newTodo = null;
  }
  removeTodo(todo) {
    this.store.dispatch(new TodoActions.Remove(todo));
  }
  toggleTodo(todo) {
    this.todoList.nativeElement.closeSlidingItems();
    this.store.dispatch(new TodoActions.Toggle(todo));
  }
}
