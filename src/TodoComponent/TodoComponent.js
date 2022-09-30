import React from "react";
import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoButtonCreate } from "./TodoButtonCreate.js";
import { TodoItem } from "./TodoItem.js";
import "./StyleTodo.css";
import { useLocalStorage } from "../customHooks/useLocalStorage";

const defaultTodos = [
  { text: "Learn React", isCompleted: false },
  { text: "Learn React2", isCompleted: true },
  { text: "Learn React3", isCompleted: true },
];

function TodoComponet() {

  const [todos, setTodos] = useLocalStorage("TODOS_V1", defaultTodos);

  const [searchValue, setSearchValue] = React.useState("");

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

  return (
    <React.Fragment>
      <div className="TodoComponent">
        <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
        />
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodosCount={searchedTodos.length}
        />
        <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              isCompleted={todo.isCompleted}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <TodoButtonCreate />
      </div>
    </React.Fragment>
  );
}

export { TodoComponet };
