import { TodoStore } from 'src/todo/TodoStore';

test('TodoStore - add item to TODO list', () => {
    let store = new TodoStore();
    store.form.fields.newTodo = 'Test TODO';
    store.add();
    expect(store.todos.length).toBe(1);
});
