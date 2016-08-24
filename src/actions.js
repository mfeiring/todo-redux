import request from 'superagent';

const uid = () => new Date().getTime();

export function addTodo(text) {
  return dispatch => {
    dispatch({ type: 'TODO_SUBMIT_STARTED' });
    request
      .post('/api/todos')
      .send({
        id: uid(),
        isDone: false,
        text: text
      })
      .end(function(err, res) {
        if (err) {
          dispatch({ type: 'TODO_SUBMIT_FAILED', err });
        } else {
          dispatch({ type: 'TODO_SUBMIT_SUCCEEDED', res });
        }
      });
  }
}

export function toggleTodo(todo) {
  return dispatch => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.get('id') });
    request
      .post('/api/todos')
      .send({
        id: todo.get('id'),
        isDone: !todo.get('isDone'),
        text: todo.get('text')
      })
      .end(function(err, res) {
        if (err) {
          dispatch({ type: 'TOGGLE_TODO_FAILED', err });
        } else {
          dispatch({ type: 'TOGGLE_TODO_SUCCEEDED', res});
        }
      });
  }
}

export function fetchTodos() {
  return dispatch => {
    dispatch({ type: 'TODO_REQUEST_STARTED' });

    request('/api/todos', function (err, result) {
      if (err) {
        dispatch({ type: 'TODO_REQUEST_FAILED', err });
      } else {
        dispatch({ type: 'TODO_REQUEST_SUCCEEDED', result });
      }
    })
  }
}
