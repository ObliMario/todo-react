import React from "react";
import { TodoContext } from "./TodoContext.js";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <div className="todo-counter">
      <h1>Notas</h1>
      <h2>
        Has completado {completedTodos} de {totalTodos}
      </h2>
    </div>
  );
}

export { TodoCounter };
