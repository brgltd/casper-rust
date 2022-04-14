import Head from "next/head";
import NotFound from "../components/not-found/not-found";

export default function App() {
  return (
    <>
      <Head>
        <title>CasperRust | NotFound</title>
        <meta
          name="description"
          content="List of interactive Casper Smart Contracts interactive challenges"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotFound />
    </>
  );
}
