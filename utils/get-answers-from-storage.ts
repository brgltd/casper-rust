import initAnswers from "./init-answers";

export default function getAnswersFromStorage(numLevels: number) {
  const answers = localStorage.getItem("answers");
  if (answers === null) {
    const generatedAnswers = initAnswers(numLevels);
    localStorage.setItem("answers", JSON.stringify(generatedAnswers));
    return generatedAnswers;
  }
  return JSON.parse(answers);
}
