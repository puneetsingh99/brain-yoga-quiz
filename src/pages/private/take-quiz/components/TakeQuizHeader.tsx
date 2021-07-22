import { X } from "react-feather";
import { Quiz } from "../../../../types";
import {
  TakeQuiz,
  SUBMIT_QUIZ_ACTION,
  SubmitQuizState,
} from "../takeQuiz.types";
import { Timer } from "./Timer";
import { formatTimer } from "../utils/formatTimer";
import { submitQuiz } from "../../../../services/submitQuiz";

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

  return (
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
            className="p-2 rounded-full flex justify-center items-center  cursor-pointer dark:bg-gray-700 bg-gray-100 hover:bg-green-500 dark:hover:bg-red-300"
          >
            <X size={18} />
          </div>
          <p className="ml-6 text-lg p-1 px-2  rounded-xl dark:bg-gray-700 bg-gray-100 ">
            {`${currQuestion + 1}/${questionList.length}`}
          </p>
        </div>
      )}

      <div className="flex justify-center items-center w-full">
        <h1 className="text-2xl tracking-wider">{quiz.name}</h1>
      </div>

      {!submitQuiz && (
        <div className="w-full hidden sm:flex justify-end items-center">
          <div className="flex w-max items-center p-2 rounded-xl dark:bg-gray-700 bg-gray-100 cursor-pointer">
            <h1>Timer: </h1>
            <div className="ml-1 w-50 flex justify-end items-center">
              {quiz.timelimit !== 0 ? (
                <Timer timelimit={quiz.timelimit} />
              ) : (
                <p>{formatTimer(0)}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
