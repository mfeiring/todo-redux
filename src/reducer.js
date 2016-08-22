const dummyTodos = [
  { id: 0, isDone: true,  text: 'dummy one' },
  { id: 1, isDone: false, text: 'dummy two' },
  { id: 2, isDone: false, text: 'dummy three' },
  { id: 3, isDone: false, text: 'dummy four' }
];

function todoReducer(state = dummyTodos, action) {
  return state;
}

export default todoReducer;