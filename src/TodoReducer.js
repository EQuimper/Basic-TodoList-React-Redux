import * as actions from './TodoActions';

export const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
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
          Object.assign({}, todo, { completed: !todo.completed }) :
        todo);
    case actions.CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    case actions.FILTER_BY_CHAR:
      const matchesFilter = new RegExp(action.ch, "i");
      return state.filter(todo => !action.ch || matchesFilter.test(todo));
    default:
      return state;
  }
}
