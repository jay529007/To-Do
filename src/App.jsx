import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./features/todoSlice";

function App() {
  const [input, setInput] = useState("");
  // Correct selector: accessing state.todo.todos
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className=" flex flex-col gap-3">
      {/* <div className="flex justify-between items-center"> */}
      <h1 className="text-xl text-center font-bold">Todo</h1>
      {/* </div> */}
      <div className="flex justify-center gap-3 ">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-[60%] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            if (input.trim() !== "") {
              dispatch(addTodo(input));
              setInput("");
            }
          }}
        >
          Add
        </button>
      </div>

      <ul className="m-4 list-none space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="fade-in glow text-white bg-violet-700 hover:bg-violet-800 text-center p-3 rounded-2xl flex justify-between items-center"
          >
            <span className="flex-1">{todo.Text}</span>
            <button
              className="pop text-white px-4 py-2 ml-3 rounded-lg bg-red-400"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
