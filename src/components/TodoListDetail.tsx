import * as React from "react";
import { Todo } from "../interfaces";
import { TextField, Button } from "./index";

type TodoListDetailProps = {
  item?: Todo;
};

const TodoListDetail = (props: TodoListDetailProps) => {
  const [title, setTitle] = React.useState(props.item.title);
  const [detail, setDetail] = React.useState(props.item.detail);
  return (
    <div>
      <h2>Title</h2>
      <TextField value={title} onChange={setTitle} />
      <br />
      <h2>Detail</h2>
      <TextField value={detail} onChange={setDetail} />
      <br /> <br />
      <Button label="aaa" onClick={() => alert("yeah!")} />
    </div>
  );
};

export default TodoListDetail;
