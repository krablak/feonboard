import { TodoStore } from 'src/todo/TodoStore';
import { observer } from 'mobx-react';
import * as React from 'react';

/**
 * Defines props for NewForm UI component.
 */
export interface NewFormProps {
    /**
     * Reference to store providing form data and actions.
     */
    store: TodoStore;
}

/**
 * UI component representing new todo form.
 */
export const NewForm: React.SFC<NewFormProps> = observer((props) => {
    // Shortcut to store form instance
    let form = props.store.form;
    // Event handler of 'enter' key event to add new TODO list item
    const onEnterAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            props.store.add();
        }
    };
    return (
        <React.Fragment>
            <input
                // 'name' attribute is used to identifify related form field
                name="newTodo"
                // 'value' attribute is reference to form field value
                value={form.fields.newTodo}
                // 'onChange' attribute is connected to form action which updates form field value found by input element name
                onChange={form.onChange}
                // 'onKeyDown' is connected to store action creating new TODO item
                onKeyDown={onEnterAdd}
                className="new-todo" placeholder="What needs to be done?" />
            {/* Show toggle button only when TODO list is not empty */}
            {props.store.hasTodos &&
                <React.Fragment>
                    <input
                        id="toggle-all"
                        // 'onChange' event is handled by custom store action which updates state of all TODO items.
                        onChange={props.store.toggleAll}
                        className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all" />
                </React.Fragment>
            }
        </React.Fragment>
    );
});