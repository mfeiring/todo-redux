import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import Todo from './Todo';

class TodoList extends Component {
  onSubmit(event) {

    const text = event.target.value;
    const isEnterKey = (event.which == 13);
    const isValid = text.length > 0;

    if (isEnterKey && isValid) {
      event.target.value = '';
      this.props.addTodo(text);
    }
  }

  render() {
    const { todos } = this.props;
    return (
      <div className="todo-container">
        <input type="text"
               className="todo-input"
               placeholder="Add todo"
               onKeyDown={this.onSubmit.bind(this)}
               />
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

function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

