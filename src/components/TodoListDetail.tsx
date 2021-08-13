import { useState } from "react";
import { useRouter } from "next/router";
import { createData, updateData } from "~/lib/todo-repository";
import { Todo } from "../interfaces";
import { TextField, Button } from "./index";

type TodoListDetailProps = {
  item?: Todo;
};

const TodoListDetail = (props: TodoListDetailProps) => {
  // idを渡されていない場合は新規作成
  const isCreate = props.item == null;
  console.log(isCreate);
  const [title, setTitle] = useState(props?.item?.title);
  const [detail, setDetail] = useState(props?.item?.detail);

  const router = useRouter();

  const handleClick = async () => {
    if (!title || !detail) {
      alert("名前とメッセージを入力してください");
      return;
    }
    if (isCreate) {
      await createData({ id: null, title: title, detail: detail });
      router.push("/");
    } else {
      await updateData({ id: props.item.id, title: title, detail: detail });
      router.push("/");
    }
  };

  return (
    <div>
      <h2>Title</h2>
      <TextField value={title} onChange={setTitle} />
      <br />
      <h2>Detail</h2>
      <TextField value={detail} onChange={setDetail} />
      <br /> <br />
      <Button label={isCreate ? "作成" : "更新"} onClick={handleClick} />
    </div>
  );
};

export default TodoListDetail;
