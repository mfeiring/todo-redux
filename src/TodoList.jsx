import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import AddTodo from './AddTodo';

class TodoList extends Component {

  render() {
    const { todos } = this.props;
    return (
      <div className="todo-container">
        <AddTodo />
        <ul className="todo-list">
          {todos.map(t => (
            <li key={todo.get('id')}
                className='todo-item'>
              <Todo todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state };
}

export default connect(mapStateToProps)(TodoList);

