import React from "react";
import Todo from "./Todo";

import "../styles/AllTodos.css";

function Todos({ todos, deleteTodo }) {
  return (
    <div id="all_todos">
      {todos.length ? (
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              index={index}
              todo={todo}
              deleteTodo={deleteTodo}
            />
          );
        })
      ) : (
        <div
          style={{
            textAlign: "center",
            width: "100%",
          }}
        >
          No Todos Yet
        </div>
      )}
    </div>
  );
}

export default Todos;
