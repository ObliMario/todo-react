import React from "react";
import { TodoContext } from "./TodoContext.js";

function TodoButtonCreate() {
    const { setOpenModal } = React.useContext(TodoContext);
  return(
      <div className="TodoButtonCreate">
        {/* When clocked, open modal */}
        <button onClick={() => setOpenModal(true)}>+</button>
      </div>
      );
}

export { TodoButtonCreate };