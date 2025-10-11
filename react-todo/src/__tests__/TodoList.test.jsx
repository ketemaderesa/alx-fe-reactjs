import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a todo/i);
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText(/add/i));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('can toggle a todo', () => {
    render(<TodoList />);
    const todo = screen.getByTestId('todo-1');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const todo = screen.getByTestId('todo-1');
    const deleteButton = within(todo).getByText('Delete');
    fireEvent.click(deleteButton);

    // Query again to ensure deletion
    expect(screen.queryByTestId('todo-1')).toBeNull();
  });
});
