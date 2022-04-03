import path from "path";

export default function getArticlesDir() {
  return path.join(process.cwd(), "content");
}
