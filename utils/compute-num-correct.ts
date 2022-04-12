import Answers from "../types/answers";

export default function computeNumCorrect(answers: Answers) {
  return Object.values(answers).reduce((acc, curr) => (curr ? ++acc : acc), 0);
}
