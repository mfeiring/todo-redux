import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class AddTodo extends Component {
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
    return (
      <input type="text"
             className="todo-input"
             placeholder="Add todo"
             onKeyDown={this.onSubmit.bind(this)}
             />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text))
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);