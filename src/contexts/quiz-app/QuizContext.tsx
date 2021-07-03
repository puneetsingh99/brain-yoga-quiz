import React, { createContext, useContext, useEffect, useReducer } from "react";
import { getQuizzes } from "../../services/getQuizzes";
// import { ServerError } from "../../services/serverError.types";
// import { Status } from "../../services/status.types";
// import { Quiz } from "../../types";
import { quizReducer } from "./reducers/quizReducer";
import { QuizContext } from "../../types";

export const QuizAppContext = createContext<QuizContext>({} as QuizContext);

export const initialState: QuizContext = {
  status: "loading",
  quizzes: null,
  error: null,
};

export const QuizAppProvider: React.FC = ({ children }) => {
  // const [quizzes, setQuizzes] = useState<Quiz[] | null>(null);
  // const [error, setError] = useState<ServerError | null>(null);
  // const [status, setStatus] = useState<Status>("loading");

  const [state, quizDispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    (async function () {
      const response = await getQuizzes();

      if ("quizzes" in response) {
        quizDispatch({ type: "SET_STATUS", payload: "success" });
        return quizDispatch({ type: "SET_QUIZZES", payload: response.quizzes });
      }
      quizDispatch({ type: "SET_STATUS", payload: "error" });
      return quizDispatch({ type: "SET_ERROR", payload: response });
    })();
  }, []);

  return (
    <QuizAppContext.Provider
      value={{
        status: state.status,
        error: state.error,
        quizzes: state.quizzes,
      }}
    >
      {children}
    </QuizAppContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizAppContext);
};
