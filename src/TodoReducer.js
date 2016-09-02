import * as actions from './TodoActions';

export const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          todo: action.payload,
          completed: false,
          id: Math.floor(Math.random() * 100) + 1
        }
      ];
    case actions.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case actions.TOGGLE_COMPLETED:
      return
    default:
      return state;
  }
}
