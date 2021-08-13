import * as React from "react";
import TodoListItem from "./TodoListItem";
import { useTodos } from "../lib/todo-repository";
import Loader from "react-loader-spinner";

const TodoList = () => {
  const { todos, isLoading, isError } = useTodos();
  if (isLoading)
    return (
      <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );

  return (
    <ul>
      {todos.items.map((item) => (
        <li key={item.id}>
          <TodoListItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
