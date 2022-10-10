import React from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

const defaultTodos = [
  { text: "Learn React1", isCompleted: false },
  { text: "Learn React2", isCompleted: true },
  { text: "Learn React3", isCompleted: true },
];

function useTodo() {
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", defaultTodos);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.isCompleted).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    const searchText = searchValue.toLowerCase();
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      isCompleted: false,
      text,
    });
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].isCompleted = !todos[todoIndex].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    /* erase from array */
    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  };

  return {
    totalTodos,
    searchValue,
    searchedTodos,
    completedTodos,
    addTodo,
    deleteTodo,
    completeTodo,
    setSearchValue,
    loading,
    error,
    openModal,
    setOpenModal,
  };
}

export { useTodo };
