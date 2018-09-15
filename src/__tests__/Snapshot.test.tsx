import * as React from 'react';
import { TodoListItem } from 'src/todo/TodoListItem';
const renderer = require('react-test-renderer');

it('TodoListItem snapshot test', () => {
    const todoListItem0 = renderer.create(<TodoListItem item={{ id: '0', completed: false, title: 'title' }} onRemove={item => false} onStateChange={item => false} />).toJSON();
    expect(todoListItem0).toMatchSnapshot();
});