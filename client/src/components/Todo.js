import React, { useRef, useState } from "react";
import "../styles/Todo.css";

function Todo({ todo }) {
  const [strike, setStrike] = useState(false);
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
      <button>edit</button>
      <button>delete</button>
    </div>
  );
}

export default Todo;
