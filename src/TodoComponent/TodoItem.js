import React from "react";
import { TodoIcon } from "./TodoIcon.js";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <li className={`todo-check-${props.isCompleted}`}>
        <label>
          {props.text}
          <div className="icons-container">
          <TodoIcon type="check" color="green" onClick={props.onComplete} />
          <TodoIcon type="delete" color="red" onClick={props.onDelete} />
          </div>

        </label>
      </li>
    </div>
  );
}

export { TodoItem };
