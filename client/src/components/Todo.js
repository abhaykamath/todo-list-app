import React, { useRef, useState } from "react";
import "../styles/Todo.css";

function Todo({ index, todo, deleteTodo, updateStatus, updateTodo }) {
  const [strike, setStrike] = useState(false);
  const [edit, setEdit] = useState(false);
  const completedRef = useRef();
  const editedContentRef = useRef();
  return (
    <div className="todo-item">
      <div className="todo-index flex-item">{index + 1}.</div>
      {!edit ? (
        <div className={`todo-title flex-item ${todo.completed && "strike"}`}>
          {todo.content}
        </div>
      ) : (
        ""
      )}
      {edit ? (
        <input
          className="flex-item form-control"
          ref={editedContentRef}
          placeholder={todo.content}
        />
      ) : (
        ""
      )}
      <div className="completed-check-box flex-item">
        <label className="form-check-label">completed</label>
        <input
          className="form-check-input"
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
            className="btn btn-outline-primary"
            onClick={() => {
              setEdit(true);
            }}
          >
            {/* <i className="fa-solid fa-pen-to-square"></i> */}
            edit
          </button>
        ) : (
          ""
        )}
        {edit ? (
          <button
            className="btn btn-outline-success"
            onClick={() => {
              if (editedContentRef.current.value !== "") {
                updateTodo(index, editedContentRef.current.value);
              }
              setEdit(false);
            }}
          >
            {/* <i className="fa-solid fa-floppy-disk"></i> */}
            save
          </button>
        ) : (
          ""
        )}
        {edit ? (
          <button
            className="btn btn-light"
            onClick={() => {
              setEdit(false);
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        ) : (
          ""
        )}
        <button
          className="delete-button btn btn-outline-danger"
          onClick={() => {
            deleteTodo(index);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
