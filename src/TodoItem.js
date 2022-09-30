import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <li className={`todo-check-${props.isCompleted}`}>
        <label>
          <input type="checkbox" defaultChecked={props.isCompleted} />
          {props.text}
        </label>
      </li>
    </div>
  );
}

export { TodoItem };
