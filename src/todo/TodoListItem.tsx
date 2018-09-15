import { observer } from 'mobx-react';
import * as React from 'react';
import { TodoItem } from 'src/todo/TodoStore';

/**
 * Defines props for TodoList UI component.
 */
export interface TodoListItemProps {
    // Reference to TODO list item UI data
    item: TodoItem;
    // Function executed on 'Complete item' button click
    onStateChange: (item: TodoItem) => void;
    // Function executed when remove button is clicked
    onRemove: (item: TodoItem) => void;
}

/**
 * UI component representing single TODO item.
 */
export const TodoListItem: React.SFC<TodoListItemProps> = observer((props: TodoListItemProps) => {
    let item = props.item;
    return (
        <li className={item.completed ? 'completed' : ''}>
            <div className="view">
                <input
                    // Input will be checked according to given item completed value
                    checked={item.completed}
                    // Register on state change function from props to checkbox change event
                    onChange={e => props.onStateChange(item)}
                    className="toggle" type="checkbox"
                />
                <label>{item.title}</label>
                <button
                    // Register on item remove function from props to button click event
                    onClick={e => props.onRemove(item)}
                    className="destroy"
                />
            </div>
        </li>
    );
});