import { GetStaticProps, GetStaticPaths } from "next";
import { Todo } from "../../interfaces";
import Layout from "../../components/Layout";
import TodoListDetail from "../../components/TodoListDetail";
import { fetchAll } from "~/lib/todo-repository";

type Props = {
  item?: Todo;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.title : "Todo Detail"}`}>
      {item && <TodoListDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const todos = await fetchAll();

  const paths = todos.items.map((todo) => ({
    params: { id: todo.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const todos = await fetchAll();
    const item = todos.items.find((data) => data.id === id);

    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
