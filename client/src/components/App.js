import React, { useState } from "react";
import Todos from "./Todos";
import Add from "./Add";

import "../styles/App.css";

function App() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todo_app_todos")
      ? JSON.parse(localStorage.getItem("todo_app_todos"))
      : []
  );

  function addTodo(new_todo) {
    setTodos((todos) => {
      let updated_todos = [...todos, new_todo];
      localStorage.setItem("todo_app_todos", JSON.stringify(updated_todos));
      return updated_todos;
    });
  }

  function deleteTodo(index) {
    setTodos((todos) => {
      let todos_copy = [...todos];
      todos_copy.splice(index, 1);
      localStorage.setItem("todo_app_todos", JSON.stringify(todos_copy));
      return todos_copy;
    });
  }

  function updateStatus(index, status) {
    setTodos((todos) => {
      let todos_copy = [...todos];
      todos_copy[index].completed = status;
      localStorage.setItem("todo_app_todos", JSON.stringify(todos_copy));
      return todos_copy;
    });
  }

  function updateTodo(index, newContent) {
    setTodos((todos) => {
      let todos_copy = [...todos];
      todos_copy[index].content = newContent;
      localStorage.setItem("todo_app_todos", JSON.stringify(todos_copy));
      return todos_copy;
    });
  }

  return (
    <div id="app">
      <div>Todo List App</div>
      <Add addTodo={addTodo} />
      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        updateStatus={updateStatus}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
