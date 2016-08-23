import request from 'superagent';

const uid = () => new Date().getTime();

export function addTodo(text) {
  return { 
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
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
