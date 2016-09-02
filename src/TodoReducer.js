import * as actions from './TodoActions';

export const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        action.payload
      ];
    case actions.DELETE_TODO:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ]
    default:
      return state;
  }
}
