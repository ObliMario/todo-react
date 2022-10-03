import React from "react";
import { TodoContext } from "./TodoContext.js";
import { TodoIcon } from "./TodoIcon.js";

function TodoButtonCreate() {
    const { setOpenModal } = React.useContext(TodoContext);
  return(
      <div className="TodoButtonCreate">
        {/* When clocked, open modal */}

        <TodoIcon type="add" color="green" onClick={() => setOpenModal(true)} />
      </div>
      );
}

export { TodoButtonCreate };