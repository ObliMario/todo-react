import React from "react";

function TodoCounter( { totalTodos, completedTodos } ) {
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
