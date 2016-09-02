import { combineReducers } from "redux";
import { TodoReducer } from './TodoReducer';
import { VisibilityReducer } from './VisibilityReducer';

export default combineReducers({
  todos: TodoReducer,
  filter: VisibilityReducer
});
