import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { TodoContext } from "../TodoComponent/TodoContext.js";

function Modal({ children }) {
  const { setOpenModal } = React.useContext(TodoContext);

  const modalStructure = (
    <div id="NewTodoModal" className="modal">
      <span className="close" onClick={() => setOpenModal(false)}>
        &times;
      </span>
      <div className="modal-content">{children}</div>
    </div>
  );
  return ReactDOM.createPortal(
    modalStructure,
    document.getElementById("modal-root")
  );
}

export { Modal };
