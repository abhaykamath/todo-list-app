import React, { useState } from "react";
import Todos from "./Todos";
import Add from "./Add";

import "../styles/App.css";

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(new_todo) {
    setTodos((todos) => [...todos, new_todo]);
  }
  return (
    <div id="app">
      <div>Todo List App</div>
      <Add addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
