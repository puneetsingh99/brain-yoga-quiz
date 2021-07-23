import { ACTIONTYPE } from "../../../types";
import { QuizzesContext } from "../../../types";

export const quizListReducer = (
  state: QuizzesContext,
  action: ACTIONTYPE
): QuizzesContext => {
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
