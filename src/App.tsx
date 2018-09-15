import * as React from 'react';
import './index.css';
import { TodoStore } from 'src/todo/TodoStore';
import { NewForm } from 'src/todo/NewForm';
import { TodoList } from 'src/todo/TodoList';

// Top level store instance passed to view components
const todoStore = new TodoStore();

class App extends React.Component {
  public render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewForm store={todoStore} />
        </header>
        <section className="main">
          <TodoList store={todoStore} />
        </section>
      </section>
    );
  }
}

export default App;
