import React, { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { TodoContext } from "../contexts/TodoContext";

const ToDoList = ({ todos }) => {
  const { setTodos } = useContext(TodoContext);
  //   console.log(todos);
  const [completed, setCompleted] = useState(false);
  const changeStatusInState = (e) => {
    setCompleted(e.target.checked);
    setTodos((prev) => [...prev]);
  };
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((items)=>items.id!==todos.id))
  }
  return (
    <div className="h-16 w-96 bg-violet-300 rounded-3xl flex items-center justify-between px-4 ">
      <input
        checked={completed}
        onChange={changeStatusInState}
        type="checkbox"
      />
      <h1 className={todos.isCompleted ? "line-through" : "none"}>
        {todos.todo}
      </h1>

      <div className=" flex gap-3">
        <AiOutlineDelete
          onClick={deleteTodo}
          className="text-3xl hover:bg-green-300 duration-500"
        />
        <AiTwotoneEdit className="text-3xl hover:bg-green-300 duration-500" />
      </div>
    </div>
  );
};

export default ToDoList;
