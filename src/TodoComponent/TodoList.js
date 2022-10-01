import React from "react";
import { TodoContext } from "./TodoContext.js";

function TodoList(props) {
  const { loading, error } = React.useContext(TodoContext);
  return (
    <ul className="TodoList">
      {/* if loading show message */}
      {loading && <p>Loading...</p>}
      {/* if error show message */}
      {error && <p>Error!</p>}
      {/* if no error and no loading show children */}
      {!error && !loading && props.children}
    </ul>
  );
}

export { TodoList };
