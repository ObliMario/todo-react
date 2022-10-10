import React from "react";
import { TodoIcon } from "./TodoIcon.js";

function TodoButtonCreate({ setOpenModal }) {
  return(
      <div className="TodoButtonCreate">
        {/* When clocked, open modal */}

        <TodoIcon type="add" color="green" onClick={() => setOpenModal(true)} />
      </div>
      );
}

export { TodoButtonCreate };