import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home">
    <h1>TodoAppSample Next.js</h1>
    <p>
      <label>
        Name:
        <input type="text" name="name" />
      </label>{" "}
      <input type="submit" value="Submit" />
    </p>
  </Layout>
);

export default IndexPage;
