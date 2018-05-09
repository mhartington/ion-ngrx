import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFilterPipe } from './todo-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoFilterPipe],
  exports: [
    TodoFilterPipe
  ]
})
export class PipesModule { }
