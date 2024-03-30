import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const InputBox = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const handelChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: new Date(), isCompleted: false, todo: newTodo }]);

    setNewTodo("");
  };
  const [newTodo, setNewTodo] = useState("");
  // console.log(newTodo)
  //   console.log(todos);

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          value={newTodo}
          onChange={handelChange}
          placeholder="Add todos here..."
          className="border-black border-[1px] px-5 py-2 w-96 border-r-0"
          type="text"
        />
        <button
          type="submit"
          className="bg-red-400 px-5 py-2 rounded-tr-3xl rounded-br-3xl border-black border-[1px] border-l-0"
        >
          Add to
        </button>
      </form>
    </div>
  );
};

export default InputBox;
