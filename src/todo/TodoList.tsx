import { observer } from 'mobx-react';
import * as React from 'react';
import { TodoStore } from 'src/todo/TodoStore';
import { TodoListItem } from 'src/todo/TodoListItem';

/**
 * Defines props for TodoList UI component.
 */
export interface TodoListProps {
    /**
     * Reference to store providing form data and actions.
     */
    store: TodoStore;
}

/**
 * UI component representing list of existing TODO list items.
 */
export const TodoList: React.SFC<TodoListProps> = observer((props: TodoListProps) => {
    // Simple shortcut variable to access all existing items
    let todos = props.store.todos;
    return (
        <ul className="todo-list">
            {todos.map(item => (
                <TodoListItem
                    // Why key? https://reactjs.org/docs/lists-and-keys.html
                    key={`todo_item_${item.id}`}
                    // Item data to be rendered
                    item={item}
                    // Register item handler functions to store actions
                    onStateChange={props.store.changeState}
                    onRemove={props.store.remove}
                />
            ))}
        </ul>
    );
});