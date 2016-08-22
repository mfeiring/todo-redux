import { List, Map } from 'immutable';

const dummyTodos = List([
  Map({ id: 0, isDone: true,  text: 'dummy one' }),
  Map({ id: 1, isDone: false, text: 'dummy two' }),
  Map({ id: 2, isDone: false, text: 'dummy three' }),
  Map({ id: 3, isDone: false, text: 'dummy four' })
]);

function todoReducer(state = dummyTodos, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return state.push(Map(action.payload));
    default:
      return state;
  }
}

export default todoReducer;