import React from "react";
import Head from "next/head";
import Hero from "../components/hero/hero";
import getIndexProps from "../utils/get-index-props";
import List from "../components/list/list";
import ListItem from "../components/list-item/list-item";
import CONFIG from "../config";
// import type Names from "../types/names";

export function getStaticProps() {
  const indexProps = getIndexProps();
  return {
    props: indexProps,
    revalidate: CONFIG.REVALIDATE,
  };
}

export default function Index({ articlesData }: any) {
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
        <List>
          {articlesData.map(({ name, experience }, i) => (
            <ListItem
              key={name}
              name={name}
              i={i + 1}
              experience={experience}
            />
          ))}
        </List>
      </div>
    </>
  );
}
