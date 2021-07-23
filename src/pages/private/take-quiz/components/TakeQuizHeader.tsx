import { X } from "react-feather";
import { Quiz } from "../../../../types";
import {
  TakeQuiz,
  SUBMIT_QUIZ_ACTION,
  SubmitQuizState,
} from "../takeQuiz.types";
import { Timer } from "./Timer";
import { formatTimer } from "../utils/formatTimer";
import { useState, useEffect } from "react";

type TakeQuizHeaderType = {
  quiz: Quiz;
  takeQuizState: TakeQuiz;
  disptachSubmitQuiz: React.Dispatch<SUBMIT_QUIZ_ACTION>;
  submitQuizState: SubmitQuizState;
};

export const TakeQuizHeader = ({
  quiz,
  takeQuizState,
  disptachSubmitQuiz,
  submitQuizState,
}: TakeQuizHeaderType) => {
  const { currQuestion, questionList } = takeQuizState;
  const { submitQuiz } = submitQuizState;
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    if (timerExpired) {
      disptachSubmitQuiz({ type: "SUBMIT_QUIZ", payload: true });
    }
  }, [timerExpired, disptachSubmitQuiz]);

  return (
    <div>
      <div
        className={`flex ${
          submitQuiz ? `justify-center` : `justify-between`
        } items-center w-full`}
      >
        {!submitQuiz && (
          <div className="w-full flex justify-start items-center">
            <div
              onClick={() =>
                disptachSubmitQuiz({
                  type: "SHOW_QUIT_QUIZ_MODAL",
                  payload: true,
                })
              }
              className="p-2 rounded-full flex justify-center items-center  cursor-pointer dark:bg-gray-700 bg-gray-100 hover:bg-red-500 dark:hover:bg-red-500 dark:hover:bg-opacity-50 hover:bg-opacity-30"
            >
              <X size={20} />
            </div>
            <p className="ml-6 text-lg p-1 px-2  rounded-xl dark:bg-gray-700 bg-gray-100 ">
              {`${currQuestion + 1}/${questionList.length}`}
            </p>
          </div>
        )}

        <div className="hidden sm:flex justify-center items-center w-full">
          <h1 className="sm:text-2xl tracking-wider">{quiz.name}</h1>
        </div>

        {!submitQuiz && (
          <div className="w-max sm:w-full sm:flex justify-end items-center">
            <div className="flex w-max items-center p-2 rounded-xl dark:bg-gray-700 bg-gray-100 cursor-pointer">
              <h1 className={`hidden sm:block`}>Timer: </h1>
              <div className="ml-1 w-50 flex justify-end items-center">
                {quiz.timelimit !== 0 ? (
                  <Timer
                    timelimit={quiz.timelimit}
                    setTimerExpired={setTimerExpired}
                  />
                ) : (
                  <p>{formatTimer(0)}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="sm:hidden flex justify-center items-center w-full my-2">
        <h1 className="text-2xl tracking-wider">{quiz.name}</h1>
      </div>
    </div>
  );
};
