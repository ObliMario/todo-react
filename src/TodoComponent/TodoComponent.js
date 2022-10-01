import React from "react";
import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoButtonCreate } from "./TodoButtonCreate.js";
import { TodoItem } from "./TodoItem.js";
import { TodoContext } from "./TodoContext.js";
import "./StyleTodo.css";
import { Modal } from "../Modal/Modal.js";
import { TodoForm } from "./TodoForm.js";

function TodoComponet() {
  const { searchedTodos, completeTodo, deleteTodo, openModal } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <div className="TodoComponent">
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              isCompleted={todo.isCompleted}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {/* Show modal is openModal is true */}
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <TodoButtonCreate />
      </div>
    </React.Fragment>
  );
}

export { TodoComponet };
