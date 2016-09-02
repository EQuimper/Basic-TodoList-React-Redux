export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
});

export const toggleCompleted = id => ({
  type: TOGGLE_COMPLETED,
  payload: id
});
