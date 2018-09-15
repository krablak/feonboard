import { Form } from 'src/common/Form';
import { observable, computed, action } from 'mobx';

/**
 * Provides data and actions for TODO app view components.
 */
export class TodoStore {

    /**
     * Form data instance.
     */
    form = new TodoForm();

    /**
     * Todo list items.
     */
    @observable todos: TodoItem[] = [];

    /**
     * Computed property providing flag that exists at least one todo item.
     */
    @computed get hasTodos(): boolean {
        return this.todos.length > 0;
    }

    /**
     * Reads content of form and creates new TODO item.
     */
    @action add() {
        // Check if any text is filled in form field
        if (this.form.fields.newTodo.trim() !== '') {
            // Add new item to TODOs list
            this.todos.unshift({ id: new Date().getTime().toString(), completed: false, title: this.form.fields.newTodo });
            // Clear form field value
            this.form.fields.newTodo = '';
        }
    }

    /**
     * Toggles state of all todo items.
     */
    @action toggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Use checkbox element 'checked' property to resolve to which state should be item switched
        let newCompletedValue = e.target.checked;
        // Go over all TODO items and change their completet flag        
        this.todos.forEach(item => {
            // Update item completed flag
            item.completed = newCompletedValue;
        });
    }

    /**
     * Changes completed state flag on item.
     */
    @action changeState = (item: TodoItem) => {
        item.completed = !item.completed;
    }

    /**
     * Removes item from TODO list.
     */
    @action remove = (item: TodoItem) => {
        this.todos = this.todos.filter(curItem => curItem.id !== item.id);
    }

}

/**
 * Single TODO item data.
 */
export interface TodoItem {
    // Item unique identifier
    id: string;
    // Item title
    title: string;
    // Completed state flag.
    completed: boolean;
}

/**
 * Holds values of form fields and related onChange action.
 */
export class TodoForm extends Form {

    @observable fields = {
        newTodo: ''
    };

}