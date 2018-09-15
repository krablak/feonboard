import * as React from 'react';
import DevTools from 'mobx-react-devtools';
import { TodoStore } from 'src/todo/TodoStore';
import { NewForm } from 'src/todo/NewForm';
import { TodoList } from 'src/todo/TodoList';
import './index.css';

// Top level store instance passed to view components
const todoStore = new TodoStore();

// Want to show how are components rendered? Set this to true.
const enableDevTools = false;

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        {enableDevTools && <DevTools />}
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewForm store={todoStore} />
          </header>
          <section className="main">
            <TodoList store={todoStore} />
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
