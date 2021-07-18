export const setCurrQuestion = (
  operation: string,
  numOfQuestions: number,
  currQuestionNumber: number
): number => {
  switch (operation) {
    case "increment":
      if (currQuestionNumber === numOfQuestions - 1) {
        return currQuestionNumber;
      }
      return currQuestionNumber + 1;

    case "decrement":
      if (currQuestionNumber === 0) {
        return currQuestionNumber;
      }
      return currQuestionNumber - 1;

    default:
      return currQuestionNumber;
  }
};
