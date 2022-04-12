export default function generateUserMessage(
  numCorrect: number,
  numLevels: number
) {
  if (numCorrect === 0) {
    return `getting started, ${numCorrect}, ${numLevels}`;
  }
  if (numCorrect < numLevels) {
    return `in progess, ${numCorrect}, ${numLevels}`;
  }
  return `all finished, ${numCorrect}, ${numLevels}`;
}
