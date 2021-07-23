import { QuestionAndResponse } from "../../takeQuiz.types";

export const calculateScore = (
  questionsWithResponse: QuestionAndResponse[],
  point: number,
  negativePoint: number
) => {
  let score = 0;

  questionsWithResponse.forEach((question) => {
    const { selectedOption, options } = question;
    const correctOption = options.find((option) => option.isCorrect);

    const correctOptionId = correctOption?._id;

    if (selectedOption === "NA") {
      score += 0;
      return;
    }
    if (selectedOption === correctOptionId) {
      score += point;
      return;
    }
    if (selectedOption !== correctOptionId) {
      score += negativePoint;
      return;
    }
  });

  return score;
};
