import React from "react";

function TodoForm({addTodo, setOpenModal}) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <div className="todo-form">
      <form onSubmit={onSubmit}>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          type="text"
          placeholder="Escribe tu tarea"
        />
        <button type="submit">Agregar</button>
        <button type="button" className="cancel" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export { TodoForm };
