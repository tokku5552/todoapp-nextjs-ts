import React, { ReactNode } from "react";
import Head from "next/head";
import { NavBar, Footer } from "./index";
import { Spacer } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "TodoApp Sample by Next.js" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title} | TodoApp Sample by Next.js</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <NavBar />
      </header>
      {children}
      <Spacer size={16} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
