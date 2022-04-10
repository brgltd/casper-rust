import fs from "fs";
import path from "path";
import matter from "gray-matter";
import getArticleNames from "./get-article-names";
import getArticlesDir from "./get-articles-dir";
import type ArticlesData from "../types/articles-data";

export default function getIndexProps(): ArticlesData {
  const ids = getArticleNames();
  const articlesData = ids.map((id) => {
    const nameWithMd = `${id}.md`;
    const filePath = path.join(getArticlesDir(), nameWithMd);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContent);
    const title = matterResult.data?.title || "";
    const experience = matterResult.data?.experience || "Intermediary";
    return { title, experience, id };
  });
  return { articlesData };
}
