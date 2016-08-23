import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <h1 className="todo-title">Todo list</h1>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;