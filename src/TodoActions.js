export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const FILTER_BY_CHAR = 'FILTER_BY_CHAR';

export const addTodo = todo => ({
  type: ADD_TODO,
  todo
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const toggleCompleted = id => ({
  type: TOGGLE_COMPLETED,
  id
});

export const clearCompleted = todo => ({ type: CLEAR_COMPLETED });

export const filterByChar = ch => ({
  type: FILTER_BY_CHAR,
  ch
});
