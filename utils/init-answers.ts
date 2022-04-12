import type Answers from "../types/answers";

export default function initAnswers(length: number) {
  const array = Array.from({ length }, (_, i) => i + 1);
  return array.reduce((acc: Answers, curr) => {
    acc[curr] = false;
    return acc;
  }, {});
}
