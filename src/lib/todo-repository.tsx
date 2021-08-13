import { Todo } from "../interfaces";
import firebase from "../firebase";
import useSWR from "swr";

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
  return { items };
};

export const useTodos = () => {
  const { data, error } = useSWR("firestore/posts", fetchAll);
  return {
    todos: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// Firestore にデータを登録する関数
export const createData = async (item: Todo) => {
  if (!item.title || !item.detail) {
    alert("名前とメッセージを入力してください");
    return;
  }

  const db = firebase.firestore();
  await db
    .collection("todos")
    .doc()
    .set({ title: item.title, detail: item.detail });
  alert("Firestoreにデータを作成できました！");
};

// Firestore にデータを登録する関数
export const updateData = async (item: Todo) => {
  if (!item.id) {
    alert("idが取得できませんでした");
    return;
  }
  if (!item.title || !item.detail) {
    alert("名前とメッセージを入力してください");
    return;
  }

  const db = firebase.firestore();
  await db
    .collection("todos")
    .doc(item.id)
    .update({ title: item.title, detail: item.detail });
  alert("Firestoreのデータを更新できました！");
};
