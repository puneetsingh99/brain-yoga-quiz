import React, { createContext, useContext, useEffect, useReducer } from "react";
import { getQuizzes } from "../../services/getQuizzes";
import { quizListReducer } from "./reducers/quizListReducer";
import { QuizzesContext } from "../../types";

export const QuizListContext = createContext<QuizzesContext>(
  {} as QuizzesContext
);

export const initialState: QuizzesContext = {
  status: "loading",
  quizzes: null,
  error: null,
};

export const QuizListProvider: React.FC = ({ children }) => {
  const [state, quizzesDispatch] = useReducer(quizListReducer, initialState);

  useEffect(() => {
    (async function () {
      const response = await getQuizzes();

      if ("quizzes" in response) {
        quizzesDispatch({ type: "SET_STATUS", payload: "success" });
        return quizzesDispatch({
          type: "SET_QUIZZES",
          payload: response.quizzes,
        });
      }
      quizzesDispatch({ type: "SET_STATUS", payload: "error" });
      return quizzesDispatch({ type: "SET_ERROR", payload: response });
    })();
  }, []);

  return (
    <QuizListContext.Provider
      value={{
        status: state.status,
        error: state.error,
        quizzes: state.quizzes,
      }}
    >
      {children}
    </QuizListContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizListContext);
};
