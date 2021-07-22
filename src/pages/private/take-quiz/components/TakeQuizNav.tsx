import { useNavigate } from "react-router-dom";

import {
  SUBMIT_QUIZ_ACTION,
  TakeQuiz,
  TAKE_QUIZ_ACTION,
} from "../takeQuiz.types";

type TakeQuizNavType = {
  takeQuizState: TakeQuiz;
  takeQuizDispatch: React.Dispatch<TAKE_QUIZ_ACTION>;
  dispatchSubmitQuiz: React.Dispatch<SUBMIT_QUIZ_ACTION>;
  submitQuiz: boolean;
};

export const TakeQuizNav = ({
  takeQuizState,
  takeQuizDispatch,
  dispatchSubmitQuiz,
  submitQuiz,
}: TakeQuizNavType) => {
  const { questionList, currQuestion } = takeQuizState;
  const numberOfQuestions = questionList.length;
  const firstQuestion = currQuestion === 0;
  const lastQuestion = currQuestion + 1 === numberOfQuestions;
  const navigate = useNavigate();

  return (
    <section className={`w-full flex items-center justify-end`}>
      {submitQuiz && (
        <button
          className={`m-auto px-6 py-2 rounded-lg gradient-bg font-semibold text-white transition duration-100 ease-in-out focus:ring-4 ring-blue-500 ring-opacity-60`}
          onClick={() => navigate("/")}
        >
          {`Done`}
        </button>
      )}
      {!submitQuiz && (
        <div className="w-3/6 flex flex-start">
          {!submitQuiz && (
            <div className="w-8/12   flex justify-end">
              {firstQuestion ? (
                <button
                  className={`px-6 py-2 rounded-lg dark:bg-gray-700 bg-gray-100 dark:hover:bg-gray-600 bg-gray-200 font-semibold text-white transition duration-200 ease-in-out focus:ring-4 ring-blue-500 ring-opacity-60`}
                  onClick={() =>
                    dispatchSubmitQuiz({
                      type: "SHOW_QUIT_QUIZ_MODAL",
                      payload: true,
                    })
                  }
                >
                  {`Quit`}
                </button>
              ) : (
                <button
                  className={`px-6 py-2 rounded-lg dark:bg-gray-700 bg-gray-100 dark:hover:bg-gray-600 bg-gray-200 font-semibold text-white transition duration-200 ease-in-out focus:ring-4 ring-blue-500 ring-opacity-60`}
                  onClick={() => {
                    takeQuizDispatch({
                      type: "SET_CURRENT_QUESTION",
                      payload: "decrement",
                    });
                  }}
                >
                  {`Previous`}
                </button>
              )}
            </div>
          )}

          {!submitQuiz && (
            <div className="w-4/12 flex justify-end">
              {lastQuestion ? (
                <button
                  className={`px-6 py-2 rounded-lg gradient-bg font-semibold text-white transition duration-100 ease-in-out focus:ring-4 ring-blue-500 ring-opacity-60`}
                  onClick={() =>
                    dispatchSubmitQuiz({
                      type: "SHOW_SUBMIT_QUIZ_MODAL",
                      payload: true,
                    })
                  }
                >
                  {`Submit`}
                </button>
              ) : (
                <button
                  className={`ml-4 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600  font-semibold text-white transition duration-100 ease-in-out cursor-pointer focus:ring-4 ring-blue-500 ring-opacity-60`}
                  onClick={() => {
                    takeQuizDispatch({
                      type: "SET_CURRENT_QUESTION",
                      payload: "increment",
                    });
                  }}
                >{`Next`}</button>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
};
