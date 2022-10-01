import React from "react";
import { TodoComponet } from "../TodoComponent/TodoComponent";
import "./App.css";
import { TodoProvider } from "../TodoComponent/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoComponet />
      </TodoProvider>
    </div>
  );
}

export default App;
