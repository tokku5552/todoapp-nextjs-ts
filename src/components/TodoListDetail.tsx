import * as React from "react";

import { Todo } from "../interfaces";

type TodoListDetailProps = {
  item: Todo;
};

const TodoListDetail = ({ item: todo }: TodoListDetailProps) => (
  <div>
    <h1>{todo.title}</h1>
    <p>ID: {todo.id}</p>
    <p>detail: {todo.detail}</p>
  </div>
);

export default TodoListDetail;
