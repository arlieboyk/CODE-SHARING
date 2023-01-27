import React from "react";
import { Todo } from "../../typing";
import Link from 'next/link'

const fetchTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return todos;
};

export default async function TodoList() {
  const todos = await fetchTodo();
  return (
    <div className="w-full m-3">
     {todos.map((todo) => (
        <div
          key={todo.id}
          className=" list-disc  hover:scale-105 shadow-md shadow-gray duration-300 flex flex-col p-5 mb-3 w-full rounded-md bg-yellow-200"
        >
          <Link href={`todos/${todo.id}`}>
            Todo: {todo.id}
            <h1 className="">{todo.title}</h1>
            <div className="mx-2">
              <span>Completed: {todo.completed ? "True": "No"}</span>
            </div>
            <p className="border-t border-black mt-5 pt-2 text-right">
              By User: {todo.userId}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
