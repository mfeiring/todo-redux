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

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
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
