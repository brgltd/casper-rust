import Level from "../../components/level/level";
import LevelMarkdown from "../../components/level-markdown/level-markdown";
import LevelEditor from "../../components/level-editor/level-editor";
import LevelInfo from "../../components/level-info/level-info";
import getLevelPaths from "../../utils/get-level-paths/get-level-paths";
import getLevelProps from "../../utils/get-level-props/get-level-props";
import useIsClient from "../../hooks/useIsClient";
import CONFIG from "../../config";
import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  GetStaticPathsResult,
} from "next";
import type LevelData from "../../types/level-data";
import { useRef } from "react";

export function getStaticPaths(): GetStaticPathsResult {
  const levelPaths = getLevelPaths();
  return {
    paths: levelPaths,
    fallback: true,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<LevelData>> {
  const { params } = context;
  if (!params) {
    return { notFound: true };
  }
  const levelProps = await getLevelProps(params);
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
}: LevelData): JSX.Element {
  const isClient = useIsClient();
  const editorRef = useRef(null);

  return (
    <Level>
      {isClient && (
        <>
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
            // todo replace with uuid
            key={Math.random()}
          />
        </>
      )}
    </Level>
  );
}
