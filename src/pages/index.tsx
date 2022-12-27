import { type NextPage } from "next";
import Head from "next/head";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const welcomeMessage = trpc.coffee.get.useQuery({ text: "Macchiato" });

  return (
    <>
      <Head>
        <title>coffee</title>
        <meta name="description" content="coffee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>coffee shop</h1>
      {welcomeMessage.data?.message}
    </>
  );
};

export default Home;
