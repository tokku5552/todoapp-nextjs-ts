import { Todo } from "../../interfaces";
import { Layout, TodoListDetail } from "../../components";

type Props = {
  item?: Todo;
  errors?: string;
};

const NewPage = () => {
  return <Layout title={"new Todo"}>{<TodoListDetail />}</Layout>;
};

export default NewPage;
