import React from "react";
import Head from "next/head";
import Hero from "../components/hero/hero";
import getIndexProps from "../utils/get-index-props";
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
          {articlesData.map(({ title, experience, id }) => (
            <ListItem key={id} title={title} id={id} experience={experience} />
          ))}
        </List>
      </div>
    </>
  );
}
