import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <li className={`todo-check-${props.isCompleted}`}>
        <label>
          <input
            type="checkbox"
            defaultChecked={props.isCompleted}
            onClick={props.onComplete}
          />
          {props.text}
          <button onClick={props.onDelete}>X</button>
        </label>
      </li>
    </div>
    
  );
}

export { TodoItem };
