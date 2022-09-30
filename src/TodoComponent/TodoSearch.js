import React from "react";

function TodoSearch( { searchValue, setSearchValue, searchedTodosCount } ) {
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