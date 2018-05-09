import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todosArr: Array<Todo> = [], searchTerm: string = ''): any {
    if (searchTerm === '') {
      return todosArr;
    }

    return todosArr.filter(todoItem => {
      return todoItem.text.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
  }

}
