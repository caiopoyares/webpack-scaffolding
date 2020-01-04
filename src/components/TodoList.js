import React, { useState } from "react";
import { connect } from "react-redux";
import { ADD_TODO } from "../store/actions/todos";

const TodoList = ({ todos, addTodo }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todoInput);
    setTodoInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={todoInput}
          onChange={e => setTodoInput(e.target.value)}
        />
        <button type="submit">Nova tarefa</button>
      </form>
      <div>
        {todos.map((todo, index) => (
          <p key={todo.id}>
            <strong>{index + 1}. </strong>
            {todo.text}
          </p>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch({ type: ADD_TODO, payload: todo })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
