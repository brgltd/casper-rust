import fs from "fs";
import path from "path";
import matter from "gray-matter";
import getArticleNames from "../utils/get-article-names";
import getArticlesDir from "../utils/get-articles-dir";
import type ArticlesData from "../types/articles-data";

export default function getIndexProps(): ArticlesData {
  const ids = getArticleNames();
  const articlesData = ids.map((id) => {
    const idWithMd = `${id}.md`;
    const filePath = path.join(getArticlesDir(), idWithMd);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContent);
    const title = matterResult.data?.title || "";
    const experience = matterResult.data?.experience || "Intermediary";
    const estimation = matterResult.data?.estimation || "15 min.";
    const idNumber = parseInt(id);
    return { title, experience, id: idNumber, estimation };
  });
  return { articlesData };
}
