import React from "react";

function TodoItem({ text, isCompleted }) {
  return (
    <div className="todo-item">
      <li>
        <label>
          <input type="checkbox" defaultChecked={isCompleted} />
          {text}
        </label>
      </li>
    </div>
  );
}

export { TodoItem };
