import fs from "fs";
import path from "path";
import matter from "gray-matter";
import getArticleNames from "./get-article-names";
import getArticlesDir from "./get-articles-dir";

function upperCasifyAtIndex(str: string, i: number) {
  return str.replace(str.charAt(i), str.charAt(i).toUpperCase());
}

function upperCasifyAfterHifen(str: string) {
  let upperCasified = str;
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === "-") {
      upperCasified = upperCasifyAtIndex(str, i + 1);
    }
  }
  return upperCasified;
}

export default function getIndexProps() {
  const articleNames = getArticleNames();
  const names = getArticleNames().map((name) => {
    const replacedFirstChar = upperCasifyAtIndex(name, 0);
    const replacedAfterHifen = upperCasifyAfterHifen(replacedFirstChar);
    return replacedAfterHifen.replace(/-/, " ");
  });
  const experiences = articleNames.map((name) => {
    const nameWithMd = `${name}.md`;
    const filePath = path.join(getArticlesDir(), nameWithMd);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContent);
    const experience = matterResult?.data?.experience || "Intermediary";
    return experience;
  });
  const articlesData = names.map((name, i) => ({
    name,
    experience: experiences[i],
  }));
  return { articlesData };
}
