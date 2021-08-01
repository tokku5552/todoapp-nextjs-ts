import { GetStaticProps } from "next";
// import Link from "next/link";
import Layout from "../components/Layout";
// import List from "../components/List";
import TodoList from "../components/TodoList";
import { Todo } from "../interfaces";
import { sampleTodoData } from "../utils/sample-data";

type Props = {
  items: Todo[];
};

const IndexPage = ({ items }: Props) => (
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
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Todo[] = sampleTodoData;
  return { props: { items } };
};

export default IndexPage;
