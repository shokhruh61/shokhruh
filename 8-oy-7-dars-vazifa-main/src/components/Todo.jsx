import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";

function Todo() {
  const [text, setText] = useState("");
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");

  };

  return (
    <div className="mt-[90px] container mx-auto">
      <div className="w-[600px] mx-auto bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-center mt-2 mb-2 text-3xl font-serif font-extrabold">TODO LIST</h1>
        <form onSubmit={handleSubmit} className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Enter Todo..."
            className="border p-2 rounded-md w-[76%]"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="bg-green-500 cursor-pointer px-6 py-2 rounded-xl">
            Add Todo
          </button>
        </form>

        <ul className="flex flex-col gap-4">
          {todos.map((todo, index) => {
            return (
              <li
                key={index}
                className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md py-4"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="mr-5 cursor-pointer inline-block"
                  />
                  <p className={`text-lg w-[470px] p-1 h-[70px] overflow-auto ${todo.completed ? "line-through text-gray-400" : ""}`}>
                    {todo.text}
                  </p>
                </div>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="cursor-pointer"
                >
                  ❌
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
