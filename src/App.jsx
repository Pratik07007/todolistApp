import React, { useContext, useState } from "react";
import InputBox from "./components/InputBox";
import ToDoList from "./components/ToDoList";
import { TodoContext } from "./contexts/TodoContext";

const App = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="flex flex-col items-center gap-7">
      <h1 className="text-center text-3xl font-bold">To do List App</h1>
      <InputBox />
      {todos.map((items) => (
        <ToDoList key={items.id} todos={items} />
      ))}
    </div>
  );
};

export default App;
