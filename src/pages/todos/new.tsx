import { Layout, TodoListDetail } from "../../components";

const NewPage = () => {
  return <Layout title={"new Todo"}>{<TodoListDetail />}</Layout>;
};

export default NewPage;
