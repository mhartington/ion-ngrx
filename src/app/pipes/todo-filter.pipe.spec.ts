import { TodoFilterPipe } from './todo-filter.pipe';

describe('TodoFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new TodoFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
