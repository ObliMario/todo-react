import React from "react";
import { BsCheckLg, BsXCircle, BsPlusLg } from "react-icons/bs";
import "./StyleTodoIcon.css";

const IconTypes = {
  check: (color) => <BsCheckLg className="Icon-svg Icon-svg--check" color={color} />,
  delete: (color) => <BsXCircle className="Icon-svg Icon-svg--delete" color={color} />,
  add: (color) => <BsPlusLg className="Icon-svg Icon-svg--add" color={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-Container Icon-Container--${type}`}
      onClick={onClick}
    >
      {IconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
