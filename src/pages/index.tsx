import { Layout, TodoList } from "../components";
import { useState, useEffect } from "react";
import firebase from "../firebase";
import { fetchAll } from "../lib/todo-repository";

const IndexPage = () => {
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
        <TodoList />
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

// export const getStaticProps: GetStaticProps = async () => {
//   // const items: Todo[] = sampleTodoData;
//   const result = await fetchAll();
//   const items = result.props.items;
//   return { props: { items } };
// };

export default IndexPage;
