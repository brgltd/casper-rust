export default function processInitialValue(str: string) {
  return str
    .replace(/```/g, "")
    .replace("rust", "")
    .replace("\n", "")
    .replace(/\n$/, "");
}
