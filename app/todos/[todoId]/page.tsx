import React from "react";
import { Todo } from "../../../typing";
import {notFound} from 'next/navigation'

type Pageprops = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await res.json();
  return todo;
};

export default async function page({ params: { todoId } }: Pageprops) {
  const todo = await fetchTodo(todoId);

  if(!todo.id){
    return notFound()
  }

  return (
    <div className="p-5 w-full bg-yellow-100  rounded-md  shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>

      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

