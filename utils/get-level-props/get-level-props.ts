import fs from "fs";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import prism from "remark-prism";
import processInitialValue from "../process-initial-value";
import processExpectedValue from "../process-expected-value";
import getArticleNames from "../get-article-names";
import type { ParsedUrlQuery } from "querystring";
import type LevelData from "../../types/level-data";

export default async function getLevelProps(
  params: ParsedUrlQuery
): Promise<LevelData> {
  const { id } = params;

  const filePath = `${process.cwd()}/content/${id}.md`;
  const fileContent = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(prism)
    .use(html, { sanitize: false })
    .process(matterResult.content);

  const contentHTML = processedContent.toString();
  const title = matterResult.data?.title || "";
  const numberId = parseInt(id as string);
  const numLevels = getArticleNames().length;

  const initialValuePath = `${process.cwd()}/content-metadata/initial-values/${id}.md`;
  const initialValueContent = fs.readFileSync(initialValuePath, "utf8");
  const initialValueMatter = matter(initialValueContent);
  const initialValue = processInitialValue(initialValueMatter.content);

  const expectedValuePath = `${process.cwd()}/content-metadata/expected-values/${id}.md`;
  const expectedValueContent = fs.readFileSync(expectedValuePath, "utf8");
  const expectedValueMatter = matter(expectedValueContent);
  const expectedValueWithSpace = processInitialValue(
    expectedValueMatter.content
  );
  const expectedValue = processExpectedValue(expectedValueWithSpace);

  const levelData = {
    title,
    contentHTML,
    id: numberId,
    numLevels,
    initialValue,
    expectedValue,
  };
  return levelData;
}
