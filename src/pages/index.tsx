import { GetStaticProps } from "next";
// import Link from "next/link";
import Layout from "../components/Layout";
// import List from "../components/List";
import TodoList from "../components/TodoList";
import { Todo } from "../interfaces";
import { sampleTodoData } from "../utils/sample-data";
import { useState, useEffect } from "react";
import firebase from "../firebase";

type Props = {
  items: Todo[];
};

const IndexPage = ({ items }: Props) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const data = { name, message };

  useEffect(() => {
    // firebase.auth().onAuthStateChanged(async (user) => {
    //   // 匿名ユーザーを作成する
    //   if (!user) {
    //     firebase.auth().signInAnonymously();
    //   }
    // });
  });

  // Firestore にデータを登録する関数
  const createData = async () => {
    if (!name || !message) {
      alert("名前とメッセージを入力してください");
      return;
    }
    const db = firebase.firestore();
    await db.collection("profile").doc(name).set(data);
    alert("Firestoreにデータを作成できました！");
  };

  return (
    <Layout title="Home">
      <h1>TodoAppSample Next.js</h1>
      <p>
        <label>
          Name:
          <input type="text" name="name" />
        </label>{" "}
        <input type="submit" value="Submit" />
      </p>
      <p>
        <TodoList items={items} />
      </p>
      <p>
        <label>
          名前：
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          メッセージ：
          <input value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>

        <button onClick={createData}>Firestoreにデータを作成</button>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const items: Todo[] = sampleTodoData;
  return { props: { items } };
};

export default IndexPage;
