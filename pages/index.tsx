import React from "react";
import Head from "next/head";
import Hero from "../components/hero/hero";
import getIndexProps from "../services/get-index-props";
import List from "../components/list/list";
import ListItem from "../components/list-item/list-item";
import CONFIG from "../config";
import ArticlesData from "../types/articles-data";

export function getStaticProps() {
  const indexProps = getIndexProps();
  return {
    props: indexProps,
    revalidate: CONFIG.REVALIDATE,
  };
}

export default function Index({ articlesData }: ArticlesData) {
  return (
    <>
      <Head>
        <title>Welcome | CasperRust</title>
        <meta
          name="description"
          content="List of interactive Casper Smart Contracts interactive challenges"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <List>
          {articlesData.map(({ title, experience, id, estimation }) => (
            <ListItem
              key={id}
              title={title}
              id={id}
              experience={experience}
              estimation={estimation}
            />
          ))}
        </List>
      </div>
    </>
  );
}
