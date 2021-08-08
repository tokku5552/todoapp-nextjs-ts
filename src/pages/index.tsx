import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import TodoList from "../components/TodoList";
import { Todo } from "../interfaces";
import { useState, useEffect } from "react";
import firebase from "../firebase";

type Props = {
  items: Todo[];
};

const IndexPage = ({ items }: Props) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const data = { title, detail };

  useEffect(() => {
    fetchAll();
  });

  // Firestore にデータを登録する関数
  const createData = async () => {
    if (!title || !detail) {
      alert("名前とメッセージを入力してください");
      return;
    }
    const db = firebase.firestore();
    await db.collection("todos").doc().set(data);
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
          title:
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          detail:
          <input value={detail} onChange={(e) => setDetail(e.target.value)} />
        </label>

        <button onClick={createData}>Firestoreにデータを作成</button>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const items: Todo[] = sampleTodoData;
  const result = await fetchAll();
  const items = result.props.items;
  return { props: { items } };
};

export const fetchAll = async () => {
  const db = firebase.firestore();
  const collectionRef = await db.collection("todos").get();
  const items: Todo[] = collectionRef.docs.map((doc) => {
    return {
      id: doc.id as string,
      title: doc.data().title,
      detail: doc.data().detail,
    };
  });
  return { props: { items } };
};

export default IndexPage;
