import React from "react";
import Todo from "./Todo";

import "../styles/AllTodos.css";

function Todos({ todos }) {
  return (
    <div id="all_todos">
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
    </div>
  );
}

export default Todos;
