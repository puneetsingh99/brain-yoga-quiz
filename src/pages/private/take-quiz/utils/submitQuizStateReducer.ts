import { SubmitQuizState, SUBMIT_QUIZ_ACTION } from "../takeQuiz.types";

export const submitQuizStateReducer = (
  state: SubmitQuizState,
  action: SUBMIT_QUIZ_ACTION
): SubmitQuizState => {
  switch (action.type) {
    case "SUBMIT_QUIZ":
      return {
        ...state,
        submitQuiz: action.payload,
        showSubmitQuizModal: false,
      };

    case "SHOW_SUBMIT_QUIZ_MODAL":
      return { ...state, showSubmitQuizModal: action.payload };

    case "QUIT_QUIZ":
      return {
        ...state,
        quitQuiz: action.payload,
        showQuitQuizModal: false,
      };

    case "SHOW_QUIT_QUIZ_MODAL":
      return { ...state, showQuitQuizModal: action.payload };

    default:
      return state;
  }
};
