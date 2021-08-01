import * as React from "react";
import TodoListItem from "./TodoListItem";
import { Todo } from "../interfaces";

type Props = {
  items: Todo[];
};

const TodoList = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <TodoListItem data={item} />
      </li>
    ))}
  </ul>
);

export default TodoList;
