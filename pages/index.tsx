import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";

const Main = styled.main`
  ${tw`flex flex-1 justify-center items-center flex-col py-8 px-0`}
  height: calc(100% - 90px);
`;

const Home: NextPage = () => {
  return (
    <div tw="h-screen">
      <Head>
        <title>portuDAO website</title>
        <meta name="description" content="portuDAO website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1 tw="text-3xl font-bold text-center">
          portuDAO Public Page in progress...
        </h1>
      </Main>

      <footer tw="flex flex-1 py-8 px-0 border-t-2 justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by NextJS
        </a>
      </footer>
    </div>
  );
};

export default Home;
