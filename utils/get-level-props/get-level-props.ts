import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import prism from "remark-prism";
import getArticlesDir from "../get-articles-dir";
import type { ParsedUrlQuery } from "querystring";
import type LevelData from "../../types/level-data";

export default async function getLevelProps(
  params: ParsedUrlQuery
): Promise<LevelData> {
  const { id } = params;
  const filePath = path.join(getArticlesDir(), `${id}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContent);
  const processedContent = await remark()
    .use(prism)
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHTML = processedContent.toString();
  const title = matterResult.data.title || "";
  const levelData = { title, contentHTML };
  return levelData;
}
