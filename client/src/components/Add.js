import React, { useRef } from "react";

function Add({ addTodo }) {
  const inputRef = useRef();
  function clearInput() {
    inputRef.current.value = "";
  }
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        id="add_todo_input"
        placeholder="Type here"
      />
      <button
        id="add_todo_button"
        onClick={() => {
          if (inputRef.current.value !== "") {
            addTodo({ content: inputRef.current.value, completed: false });
            clearInput();
          }
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Add;
