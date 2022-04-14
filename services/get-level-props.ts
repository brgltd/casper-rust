import remark from "remark";
import html from "remark-html";
import prism from "remark-prism";
import processInitialValue from "../utils/process-initial-value";
import processExpectedValue from "../utils/process-expected-value";
import generateMatter from "../utils/generate-matter";
import getArticleNames from "../utils/get-article-names";
import type { ParsedUrlQuery } from "querystring";

export default async function getLevelProps(params: ParsedUrlQuery) {
  const { id } = params;
  const filePath = `${process.cwd()}/content/${params?.id}.md`;
  const matterResult = generateMatter(filePath);
  if (!matterResult) {
    return matterResult;
  }

  const processedContent = await remark()
    .use(prism)
    .use(html, { sanitize: false })
    .process(matterResult.content);

  const contentHTML = processedContent.toString();
  const title = matterResult.data?.title || "";
  const numberId = parseInt(id as string);
  const numLevels = getArticleNames().length;

  const initialValuePath = `${process.cwd()}/content-metadata/initial-values/${id}.md`;
  const initialValueMatter = generateMatter(initialValuePath);
  if (!initialValueMatter) {
    return matterResult;
  }
  const initialValue = processInitialValue(initialValueMatter.content);

  const expectedValuePath = `${process.cwd()}/content-metadata/expected-values/${id}.md`;
  const expectedValueMatter = generateMatter(expectedValuePath);
  if (!expectedValueMatter) {
    return expectedValueMatter;
  }
  const expectedValueWithSpace = processInitialValue(
    expectedValueMatter.content
  );
  const expectedValue = processExpectedValue(expectedValueWithSpace);

  return {
    title,
    contentHTML,
    id: numberId,
    numLevels,
    initialValue,
    expectedValue,
  };
}
