import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import prism from "remark-prism";
import getArticlesDir from "../levels/get-articles-dir";
import type { ParsedUrlQuery } from "querystring";
import type ContentHTML from "../../types/content-html";

export default async function getLevelProps(
  params: ParsedUrlQuery
): Promise<ContentHTML> {
  const { id } = params;
  const filePath = path.join(getArticlesDir(), `${id}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContent);
  const processedContent = await remark()
    .use(prism)
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHTML = processedContent.toString();
  return { contentHTML };
}
