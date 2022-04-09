import React from "react";
import Head from "next/head";
import Hero from "../components/hero/hero";

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>Welcome | CasperPath</title>
        <meta
          name="description"
          content="List of interactive tutorials for casper smart contracts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
      </div>
    </>
  );
}
