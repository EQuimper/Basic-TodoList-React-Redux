import * as actions from './TodoActions';

export const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        { // Give us a object with this prop
          todo: action.todo,
          completed: false,
          id: Math.floor(Math.random() * 100) + 1
        }
      ];
    case actions.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case actions.TOGGLE_COMPLETED:
      return state.map(todo =>
        todo.id === action.id ?
          { // Assure we don't mutate the object
            ...todo,
            completed: !todo.completed
          } :
        todo);
    case actions.CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}
