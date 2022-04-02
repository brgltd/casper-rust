import fs from "fs";
import getArticlesDir from "../levels/get-articles-dir";
import GetLevelPaths from "./get-level-paths.types";

export default function getLevelPaths(): Array<GetLevelPaths> {
  const fileNames = fs.readdirSync(getArticlesDir());
  const paths = fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, "") },
  }));
  return paths;
}
