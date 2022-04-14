export default function generateUserMessage(
  numCorrect: number,
  numRemaining: number
) {
  if (numCorrect === 0) {
    return `Getting started on CasperRust smart contract challenges.`;
  }
  if (numCorrect < numRemaining) {
    return `Progressing on CasperRust smart contract challenges. Already done ${numCorrect}. Only ${numRemaining} challenges to go!`;
  }
  return `Finished all CasperRust smart contract challenges!`;
}
