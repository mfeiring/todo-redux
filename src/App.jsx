import React, { Component } from 'react';
import Todo from './Todo';
import TodoList from './TodoList';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>Todo list
        <TodoList />
      </div>
    );
  }
}

export default connect(state => ({todos: state}))(App);
