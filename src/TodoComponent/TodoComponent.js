import React from "react";
import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoButtonCreate } from "./TodoButtonCreate.js";
import { TodoItem } from "./TodoItem.js";
import { useTodo } from "./useTodo.js";
import "./StyleTodo.css";
import { Modal } from "../Modal/Modal.js";
import { TodoForm } from "./TodoForm.js";
import { TodoLoading } from "./TodoLoading.js";
import { TodoError } from "./TodoError.js";
import { TodoEmpty } from "./TodoEmpty.js";

function TodoComponet() {
  const {
    searchedTodos,
    searchedTodosCount,
    openModal,
    totalTodos,
    completedTodos,
    loading,
    error,
    searchValue,
    completeTodo,
    deleteTodo,
    setSearchValue,
    setOpenModal,
    addTodo,
  } = useTodo();

  return (
    <div className="TodoComponent">
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoSearch
        setSearchValue={setSearchValue}
        searchedTodosCount={searchedTodosCount}
      />
      <TodoList
        onLoading={() => <TodoLoading />}
        onError={() => <TodoError />}
        onEmpty={() => <TodoEmpty />}
        onEmptySearched={(text) => (
          <p>No hay tareas que coincidan con {text}</p>
        )}
        loading={loading}
        error={error}
        totalTodos={totalTodos}
        searchedText={searchValue}
        searchedTodos={searchedTodos}
        render={(todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            isCompleted={todo.isCompleted}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {}
      </TodoList>

      {/* Show modal is openModal is true */}
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <TodoButtonCreate setOpenModal={setOpenModal} />
    </div>
  );
}

export { TodoComponet };
