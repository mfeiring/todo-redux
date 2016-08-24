import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { toggleTodo, deleteTodo } from '../actions';

class TodoList extends Component {
  render() {
    const { todos, toggleTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.get('id')} className='todo-item'>
            <Todo todo={todo} />
            <i className="fa fa-check fa-lg" 
               aria-hidden="true"
               onClick={ () => toggleTodo(todo) }>
            </i>
            <i className="fa fa-trash fa-lg"
               aria-hidden="true"
               onClick={ id => deleteTodo(todo.get('id')) }>
            </i>
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
    toggleTodo: todo => dispatch(toggleTodo(todo)),
    deleteTodo: id => dispatch(deleteTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
