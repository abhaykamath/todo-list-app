import React from "react";
import Todo from "./Todo";

import "../styles/AllTodos.css";

function Todos({ todos, deleteTodo, updateStatus, updateTodo }) {
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
              updateStatus={updateStatus}
              updateTodo={updateTodo}
            />
          );
        })
      ) : (
        <div
          style={{
            textAlign: "center",
            width: "100%",
            color: "#ccc",
          }}
        >
          No Todos Yet
        </div>
      )}
    </div>
  );
}

export default Todos;
