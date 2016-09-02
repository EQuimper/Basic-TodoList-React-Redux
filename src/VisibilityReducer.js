import * as actions from './VisibilityActions';

export const VisibilityReducer = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case actions.SHOW_ALL:
      return state;
    case actions.SHOW_COMPLETED:
      return state.filter(todo => todo.completed);
    case actions.SHOW_NOT_COMPLETED:
      return state.filter(todo => !todo.complted);
    default:
      return state;
  }
};
