export default function processInitialValue(str: string) {
  return str
    .replace(/```/g, "")
    .replace("rust", "")
    .replace(/^(\r)?(\n)?/, "")
    .replace(/(\r)?(\n)?$/, "");
}
