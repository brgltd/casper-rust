import fs from "fs";
import getArticlesDir from "./get-articles-dir";

export default function getArticleNames() {
  const names = fs.readdirSync(getArticlesDir());
  return names
    .filter((name) => name !== "test.md")
    .map((name) => name.replace(/\.md$/, ""));
}
