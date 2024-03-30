import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";

const ToDoList = ({todos}) => {
    console.log(todos)
  return (
    <div className="h-16 w-96 bg-violet-300 rounded-3xl flex items-center justify-between px-4 ">
      <h1>{todos.todo}</h1>
      <div className=" flex gap-3">
        <AiOutlineDelete className="text-3xl hover:bg-green-300 duration-500" />
        <AiTwotoneEdit className="text-3xl hover:bg-green-300 duration-500" />
      </div>
    </div>
  );
};

export default ToDoList;
