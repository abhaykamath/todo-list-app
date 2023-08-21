import React, { useRef, useState } from "react";
import "../styles/Todo.css";

function Todo({ index, todo, deleteTodo, updateStatus, updateTodo }) {
  const [strike, setStrike] = useState(false);
  const [edit, setEdit] = useState(false);
  const completedRef = useRef();
  const editedContentRef = useRef();
  return (
    <div className="todo-item">
      <div className="flex-item">{index + 1}.</div>
      {!edit ? (
        <div className={`todo-title flex-item ${todo.completed && "strike"}`}>
          {todo.content}
        </div>
      ) : (
        ""
      )}
      {edit ? (
        <input
          className="flex-item"
          ref={editedContentRef}
          placeholder={todo.content}
        />
      ) : (
        ""
      )}
      <div className="completed-check-box flex-item">
        <label>completed</label>
        <input
          ref={completedRef}
          type="checkbox"
          checked={todo.completed}
          onClick={() => {
            // setStrike(completedRef.current.checked);
            updateStatus(index, completedRef.current.checked);
          }}
        />
      </div>
      <div className="button-container flex-item">
        {!edit ? (
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            edit
          </button>
        ) : (
          ""
        )}
        <button
          onClick={() => {
            deleteTodo(index);
          }}
        >
          delete
        </button>
        {edit ? (
          <button
            onClick={() => {
              if (editedContentRef.current.value !== "") {
                updateTodo(index, editedContentRef.current.value);
              }
              setEdit(false);
            }}
          >
            save
          </button>
        ) : (
          ""
        )}
        {edit ? (
          <button
            onClick={() => {
              setEdit(false);
            }}
          >
            back
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Todo;
