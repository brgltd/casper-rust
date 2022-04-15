import { v4 } from "uuid";
import Head from "next/head";
import Level from "../../components/level/level";
import LevelMarkdown from "../../components/level-markdown/level-markdown";
import LevelEditor from "../../components/level-editor/level-editor";
import LevelInfo from "../../components/level-info/level-info";
import getLevelPaths from "../../services/get-level-paths";
import getLevelProps from "../../services/get-level-props";
import useIsClient from "../../hooks/useIsClient";
import CONFIG from "../../config";
import type { GetStaticPropsContext, GetStaticPathsResult } from "next";
import type LevelData from "../../types/level-data";
import { useRef } from "react";

export function getStaticPaths(): GetStaticPathsResult {
  const levelPaths = getLevelPaths();
  return {
    paths: levelPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  if (!params) {
    return { notFound: true };
  }
  const levelProps = await getLevelProps(params);
  if (!levelProps) {
    return { notFound: true };
  }
  return {
    props: levelProps,
    revalidate: CONFIG.REVALIDATE,
  };
}

export default function ID({
  title,
  contentHTML,
  id,
  numLevels,
  initialValue,
  expectedValue,
}: LevelData) {
  const isClient = useIsClient();
  const editorRef = useRef(null);

  return (
    <>
      <Head>
        <title>CasperRust | {title}</title>
        <meta
          name="description"
          content="List of interactive Casper Smart Contracts interactive challenges"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isClient && (
        <Level>
          <LevelMarkdown title={title} contentHTML={contentHTML} />
          <LevelInfo
            id={id}
            numLevels={numLevels}
            editorRef={editorRef}
            expectedValue={expectedValue}
          />
          <LevelEditor
            editorRef={editorRef}
            initialValue={initialValue}
            key={v4()}
          />
        </Level>
      )}
    </>
  );
}
