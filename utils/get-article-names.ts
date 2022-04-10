import fs from "fs";
import getArticlesDir from "./get-articles-dir";

export default function getArticleNames() {
  const names = fs.readdirSync(getArticlesDir());
  return names.map((name) => name.replace(/\.md$/, ""));
}
