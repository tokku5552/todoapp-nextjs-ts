import React from "react";
import Link from "next/link";

import { Todo } from "../interfaces";

type Props = {
  data: Todo;
};

const TodoListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.title}
    </a>
  </Link>
);

export default TodoListItem;
