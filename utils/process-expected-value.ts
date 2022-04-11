export default function processExpectedValue(str: string) {
  return str
    .split("\n")
    .filter((item) => !item.replace(/\s/g, "").startsWith("//"))
    .join("")
    .replace(/\n|\r|\s/g, "");
}
