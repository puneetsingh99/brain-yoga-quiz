import {
  SubmitQuizType,
  ACTION_TYPE,
} from "../../../../types/submitQuiz.types";

export const submitQuizReducer = (
  state: SubmitQuizType,
  action: ACTION_TYPE
): SubmitQuizType => {
  switch (action.type) {
    case "SET_STATUS":
      return { ...state, status: action.payload };

    case "SET_SUBMITTED_QUIZ_RESPONSE":
      return { ...state, status: "success", updatedUser: action.payload };

    case "SET_ERROR":
      return { ...state, status: "error", error: action.payload };

    default:
      return state;
  }
};
