export default function generateUserMessage(
  numCorrect: number,
  numLevels: number
) {
  if (numCorrect === 0) {
    return `Getting started on CasperRust smart contract challenges.`;
  }
  if (numCorrect < numLevels) {
    return `Progressing on CasperRust smart contract challenges. Already done ${numCorrect} of ${numLevels} challenges!`;
  }
  return `Finished all CasperRust smart contract challenges!`;
}
