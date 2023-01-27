import React from "react";
import { Todo } from "../../typing";
import Link from "next/link";
const fetchTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return todos;
};

export default async function TodoList() {
  const todos = await fetchTodo();

  
  return (
    <div>
      <h1>this where the todos will be listed</h1>
    </div>
  );
}
