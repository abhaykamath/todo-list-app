import React, { useRef, useState } from "react";
import "../styles/Todo.css";

function Todo({ index, todo, deleteTodo }) {
  const [strike, setStrike] = useState(false);
  const [edit, setEdit] = useState(false);
  const completedRef = useRef();
  return (
    <div className="todo-item">
      <div className={`todo-title ${strike && "strike"}`}>{todo}</div>
      <div className="completed-check-box">
        <label>completed</label>
        <input
          ref={completedRef}
          type="checkbox"
          onClick={() => {
            setStrike(completedRef.current.checked);
          }}
        />
      </div>
      <div className="button-container">
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
        {edit ? <button>save</button> : ""}
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
