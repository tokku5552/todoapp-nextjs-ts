import React from "react";
import Link from "next/link";
import { ListItem } from "@chakra-ui/react";
import { Todo } from "../interfaces";

type Props = {
  data: Todo;
};

const TodoListItem = ({ data }: Props) => (
  <Link href="/todos/[id]" as={`/todos/${data.id}`}>
    <a>
      <ListItem
        bg="blue.500"
        w="80%"
        p={4}
        color="white"
        px={4}
        m={3}
        h={16}
        borderRadius="md"
      >
        {data.title}
      </ListItem>
    </a>
  </Link>
);

export default TodoListItem;
