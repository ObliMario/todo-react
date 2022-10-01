import React from "react";
import { TodoContext } from "./TodoContext.js";

function TodoSearch( ) {
  
  const {setSearchValue, searchedTodosCount } = React.useContext(TodoContext);
  
  const seachTodos = (event) => {
    setSearchValue(event.target.value);
  };
  return(
    <div className="TodoSearch">
      <input 
      placeholder="Buscar Notas..." 
      onChange={seachTodos}
      />
      <p> {searchedTodosCount} resultado</p>
    </div>
    ); 
}

export { TodoSearch };