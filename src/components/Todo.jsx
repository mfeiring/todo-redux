import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { todo } = this.props;
    if(todo.get('isDone')) {
      return <strike>{todo.get('text')}</strike>;
    } else {
      return <span>{todo.get('text')}</span>;
    }
  }
}

export default Todo;