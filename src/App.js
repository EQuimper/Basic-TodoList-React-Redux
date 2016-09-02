import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as TodoActions from './TodoActions';
import './App.css';


const App = ({ actions, todos }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const todo = form.querySelector('[name="todo"]').value;
    actions.addTodo(todo);
    e.target.querySelector('[name="todo"]').value = '';
  }
  const handleDelete = id => actions.deleteTodo(id);
  return (
    <div className="root">
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" placeholder="Add a new todo" name="todo" />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo.todo}
            <button onClick={() => handleDelete(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapState = state => ({ todos: state.todos });

const mapDispatch = dispatch => ({ actions: bindActionCreators(TodoActions, dispatch) });

export default connect(mapState, mapDispatch)(App);
