import { GetStaticProps, GetStaticPaths } from "next";
import { Todo } from "../../interfaces";
import { sampleTodoData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import TodoListDetail from "../../components/TodoListDetail";

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
  const paths = sampleTodoData.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = sampleTodoData.find((data) => data.id === id);

    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
