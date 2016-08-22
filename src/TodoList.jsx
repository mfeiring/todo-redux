import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todo-container">
        <input type="text"
               className="todo-input"
               placeholder="Add todo" />
        <ul className="todo-list">
          {todos.map(t => (
            <li key={t.id}
                className='todo-item'>
              <Todo todo={t} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({todos: state}))(TodoList);