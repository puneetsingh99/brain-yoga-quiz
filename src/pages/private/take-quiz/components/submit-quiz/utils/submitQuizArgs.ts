import { Quiz } from "../../../../../../types";
import { QuestionAndResponse, TakeQuiz } from "../../../takeQuiz.types";
import { calculateScore } from "../calculateScore";

export const submitQuizArgs = (quiz: Quiz, takeQuizState: TakeQuiz) => {
  const persistentTime = window.localStorage.getItem("timer");

  const points: number = quiz.score;
  const negativePoints: number = quiz.negativeScore;

  const questionList: QuestionAndResponse[] = takeQuizState.questionList;
  const time = persistentTime && JSON.parse(persistentTime);
  const timeInMins: number = Math.round((time / 60) * 100) / 100;

  const score = calculateScore(questionList, points, negativePoints);

  return { quizId: quiz._id, score, timeInMins, questionList };
};
