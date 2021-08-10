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
