import { Button, Layout, TodoList } from "../components";
import { useState, useEffect } from "react";
import firebase from "../firebase";
import { fetchAll } from "../lib/todo-repository";
import router from "next/router";

const IndexPage = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    fetchAll();
  });

  const handleClick = async () => {
    router.push("/todos/new");
  };

  return (
    <Layout title="Home">
      <h1>TodoAppSample Next.js</h1>
      <p>
        <TodoList />
      </p>
      <Button label={"新規作成"} onClick={handleClick} />
    </Layout>
  );
};

export default IndexPage;
