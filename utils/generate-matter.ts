import fs from "fs";
import matter from "gray-matter";

export default function generateMatter(path: string) {
  try {
    return matter(fs.readFileSync(path, "utf8"));
  } catch (error) {
    return null;
  }
}
