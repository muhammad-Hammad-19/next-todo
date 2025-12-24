"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update, deletF, increment } from "../feature/todo/todoSilice";

const TodoPage = () => {
  const todos = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [input, setInput] = useState({ title: "" });

  const handleAdd = () => {
    if (input.title.trim() === "") return;

    dispatch(
      increment({
        id: Date.now(),
        title: input.title,
      })
    );
    setInput({ title: "" });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">My Todo App</h1>

      {/* Input */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={input.title}
          onChange={(e) => setInput({ title: e.target.value })}
          placeholder="Enter new todo..."
          className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <div className="space-y-4">
        {todos?.map((todo, i) => (
          <div
            key={todo.id}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <span className="text-gray-800 font-medium">{todo.title}</span>

            <div className="flex gap-2">
              <button
                onClick={() => dispatch(update({ id: i, title: prompt() }))}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition"
              >
                Update
              </button>

              <button
                onClick={() => dispatch(deletF(i))}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
