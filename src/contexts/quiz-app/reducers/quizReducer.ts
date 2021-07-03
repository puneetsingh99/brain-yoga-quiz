import { ACTIONTYPE } from "../../../types";
import { QuizContext } from "../../../types";

export const quizReducer = (
  state: QuizContext,
  action: ACTIONTYPE
): QuizContext => {
  switch (action.type) {
    case "SET_QUIZZES":
      return { ...state, quizzes: action.payload };

    case "SET_STATUS":
      return { ...state, status: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
