import { useReducer, useEffect } from "react";
import { getQuiz } from "../../../services";
import { ServerError } from "../../../services/serverError.types";
import { Quiz, Status } from "../../../types";

type QuizType = {
  status: Status;
  quiz: Quiz | null;
  error: ServerError | null;
};

const initialState: QuizType = {
  status: "loading",
  quiz: null,
  error: null,
};

type ACTIONTYPE =
  | { type: "SET_STATUS"; payload: Status }
  | { type: "SET_QUIZ"; payload: Quiz }
  | { type: "SET_ERROR"; payload: ServerError };

const quizReducer = (state: QuizType, action: ACTIONTYPE): QuizType => {
  switch (action.type) {
    case "SET_STATUS":
      return { ...state, status: action.payload };

    case "SET_QUIZ":
      return { ...state, quiz: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export const useQuiz = (id: string) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    (async function () {
      const response = await getQuiz(id);

      if ("quiz" in response) {
        dispatch({ type: "SET_STATUS", payload: "success" });
        return dispatch({ type: "SET_QUIZ", payload: response.quiz });
      }

      dispatch({ type: "SET_STATUS", payload: "error" });
      return dispatch({ type: "SET_ERROR", payload: response });
    })();
  }, [id]);

  return { status: state.status, quiz: state.quiz, error: state.error };
};
