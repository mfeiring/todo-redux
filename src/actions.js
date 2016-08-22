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