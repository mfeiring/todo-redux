import Immutable, { List, Map } from 'immutable';

const initialState = List([]);

function todoReducer(state = initialState, action) {
  switch(action.type) {
    case 'TODO_SUBMIT_SUCCEEDED':
      return state.push(Map(action.res.body));
    case 'TOGGLE_TODO':
      return state.map(todo => (
        todo.get('id') === action.payload ?
        todo.update('isDone', isDone => !isDone) :
        todo
      ));
    case 'TODO_REQUEST_SUCCEEDED':
      return Immutable.fromJS(action.result.body);
    default:
      return state;
  }
}

export default todoReducer;
