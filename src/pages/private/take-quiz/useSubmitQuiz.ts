import { useAuth } from "../../../contexts";
import { useReducer, useEffect, useState } from "react";
import {
  SubmitQuizPayload,
  SubmitQuizType,
} from "../../../types/submitQuiz.types";
import { submitQuizReducer } from "./utils/submitQuizReducer";
import { submitQuiz } from "../../../services/submitQuiz";

const initialState: SubmitQuizType = {
  status: "submitting",
  updatedUser: null,
  error: null,
};

export const useSubmitQuiz = (
  quizId: string,
  score: number,
  timeTaken: number
) => {
  const { userId } = useAuth();
  const initialPayload: SubmitQuizPayload = {
    quiz: quizId,
    score,
    timeTaken,
  };

  const [payload, setPayload] = useState<SubmitQuizPayload>(initialPayload);

  const [state, dispatch] = useReducer(submitQuizReducer, initialState);

  useEffect(() => {}, [setPayload]);

  useEffect(() => {
    (async function () {
      const response = await submitQuiz(userId, payload);

      if ("updatedUser" in response) {
        return dispatch({
          type: "SET_SUBMITTED_QUIZ_RESPONSE",
          payload: response.updatedUser,
        });
      }
      return dispatch({ type: "SET_ERROR", payload: response });
    })();
  }, [userId, payload]);

  return { submitQuizState: state, submitQuizDispatch: dispatch };
};
