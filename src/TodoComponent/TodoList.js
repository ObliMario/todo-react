import React from "react";
import { TodoContext } from "./TodoContext.js";
import { TodoLoading } from "./TodoLoading.js";
import { TodoError } from "./TodoError.js";


function TodoList(props) {
  const { loading, error } = React.useContext(TodoContext);
  return (
    <ul className="TodoList">
      {/* if loading show message */}
      {loading && <TodoLoading />}
      {loading && <TodoLoading />}
      {loading && <TodoLoading />}
      {/* if error show message */}
      {error && <TodoError />}
      {/* if no error and no loading show children */}
      {!error && !loading && props.children}
    </ul>
  );
}

export { TodoList };
