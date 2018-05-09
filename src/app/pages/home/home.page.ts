import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/todo/todo.actions';
import { Todo } from '../../model';
import { Observable } from 'rxjs';
import { AppState } from '../../store';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  // Observable based class members are suffixed with a $
  // to mark that they reactive
  public todos$: Observable<Array<Todo>>;

  public searchTerm = '';
  @ViewChild('todoList') todoList: any;

  constructor(
    private store: Store<AppState>,
    private alertCtrl: AlertController
  ) {}
  ngOnInit() {
    this.todos$ = this.store.select('todos');
  }
  removeTodo(todo: Todo) {
    this.store.dispatch(new TodoActions.Remove(todo));
  }
  toggleTodo(todo) {
    this.todoList.nativeElement.closeSlidingItems();
    this.store.dispatch(new TodoActions.Toggle(todo));
  }

  async addTodo() {
    const popup = await this.alertCtrl.create({
      header: 'Create Todo',
      inputs: [{
        type: 'text',
        name: 'text',
        placeholder: 'Enter todo text',
      }],
      buttons: [{
        text: 'Cancel'
      }, {
        text: 'Save',
        handler: ({text}) => {
          this.store.dispatch(
            new TodoActions.Add({ text, completed: false })
          );
        }
      }]
    });
    popup.present();
  }
}
