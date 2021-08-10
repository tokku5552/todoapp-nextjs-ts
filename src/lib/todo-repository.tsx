import { Todo } from "../interfaces";
import firebase from "../firebase";

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
