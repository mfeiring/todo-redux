import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { toggleTodo } from './actions';

class TodoList extends Component {
  render() {
    const { todos, toggleTodo } = this.props;

    return (
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.get('id')}
              className='todo-item'
              onClick={id => toggleTodo(todo.get('id'))}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

