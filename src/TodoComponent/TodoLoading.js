import React from "react";
import "./StyleTodoLoading.css";
function TodoLoading() {
  return (

    <div className="TodoLoading-Container">
      <li>
        <label>
          <input type="checkbox" className="TodoLoading-CheckIcon" />
          <span className="TodoLoading-Text">Cargando...</span>
          <button className="TodoLoading-DeleteIcon">X</button>
        </label>
      </li>
    </div>
  );
}

export { TodoLoading };
