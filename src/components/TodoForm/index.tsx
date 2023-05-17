"use client";
import { useAddTodoMutation } from "@/utils/services/api";
import React from "react";

const TodoForm = () => {
  const [addTodo, { isLoading, isSuccess }] = useAddTodoMutation();

  if (isSuccess) {
    alert("Success add todo");
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo(e.target["title"].value);
    e.target.reset();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex justify-center items-center gap-4"
    >
      <label htmlFor="title">Todo:</label>
      <input
        id="title"
        type="text"
        className="text-black py-1 px-2 rounded-md outline-none"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-400 py-1 px-2 rounded-md active:scale-125"
      >
        {!isLoading ? "Add" : "..."}
      </button>
    </form>
  );
};

export default TodoForm;
