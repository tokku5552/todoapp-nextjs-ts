import { Button, Layout, TodoList } from "../components";
import { useEffect } from "react";
import { Box, chakra, Heading } from "@chakra-ui/react";
import { fetchAll } from "../lib/todo-repository";
import router from "next/router";

const IndexPage = () => {
  useEffect(() => {
    fetchAll();
  });

  const handleClick = async () => {
    router.push("/todos/new");
  };

  return (
    <Box>
      <Layout title="Home">
        <Heading as="h1" size="2xl" isTruncated>
          TodoAppSample Next.js
        </Heading>
        <p>
          <TodoList />
        </p>
        <Button label={"新規作成"} onClick={handleClick} />
      </Layout>
    </Box>
  );
};

export default IndexPage;
