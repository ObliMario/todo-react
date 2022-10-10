import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, setOpenModal }) {

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
