import React from "react";

function TodoList(props) {
  const renderFunc = props.render || props.children;
  return (
    <ul className="TodoList">
      {/* if error show message */}
      {props.error && props.onError()}
      {/* if loading show message */}
      {props.loading && props.onLoading()}
      {/* if empty */}
      {!props.loading && !props.totalTodos && props.onEmpty()}
      {/* if empty and searched */}
      {(!!props.totalTodos &&
        !props.searchedTodos.length) &&
        props.onEmptySearched(props.searchedText)}
      {/* if no error and no loading show children */}
      { !props.loading && props.searchedTodos.map(renderFunc)}
    </ul>
  );
}

export { TodoList };
