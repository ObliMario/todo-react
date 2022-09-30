import React from "react";

function TodoCounter({ total, completed }) {
  return(
    <div className="todo-counter">
      <h1>Notas</h1>
      <h2>Has completado {completed} de {total}</h2>
    </div>
  ) 
}

export { TodoCounter };
