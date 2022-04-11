export default function processInitialValue(str: string) {
  return str.replace(/rust/, "").replace(/```/g, "");
}
