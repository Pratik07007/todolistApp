import React, { useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    //     {
    //     id:1,
    //     todo:"Learn DSA",
    //     isCompleted:false
    // }
  ]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
