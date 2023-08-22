import React, { useRef } from "react";

function Add({ addTodo }) {
  const inputRef = useRef();
  function clearInput() {
    inputRef.current.value = "";
  }
  return (
    <div id="add-container" className="input-group flex-nowrap">
      <input
        ref={inputRef}
        type="text"
        id="add_todo_input"
        placeholder="Type here"
        className="form-control"
      />
      <button
        id="add_todo_button"
        className="btn btn-primary"
        onClick={() => {
          if (inputRef.current.value !== "") {
            addTodo({ content: inputRef.current.value, completed: false });
            clearInput();
          }
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default Add;
