import fs from "fs";
import matter from "gray-matter";

export default function generateMatter(path: string) {
  return matter(fs.readFileSync(path, "utf8"));
}
