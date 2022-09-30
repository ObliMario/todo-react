import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList.js";
import { TodoButtonCreate } from "./TodoButtonCreate";
import { TodoItem } from "./TodoItem";
import "./StyleTodo.css";

const todos = [
  { text: "Learn React", isCompleted: false },
  { text: "Learn React2", isCompleted: false },
  { text: "Learn React3", isCompleted: false },
];

function TodoComponet() {
  return (
    <React.Fragment>
      <div className="TodoComponent">
        <TodoCounter />
        {<TodoSearch />}
        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              isCompleted={todo.isCompleted}
            />
          ))}
        </TodoList>
        <TodoButtonCreate />
      </div>
    </React.Fragment>
  );
}

export { TodoComponet };
