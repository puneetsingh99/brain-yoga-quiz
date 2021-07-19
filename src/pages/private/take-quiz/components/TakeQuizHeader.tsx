import { X } from "react-feather";
import { Quiz } from "../../../../types";
import { TakeQuiz } from "../takeQuiz.types";
import { Timer } from "./Timer";
import { formatTimer } from "../utils/formatTimer";

type TakeQuizHeaderType = {
  quiz: Quiz;
  takeQuizState: TakeQuiz;
};

export const TakeQuizHeader = ({ quiz, takeQuizState }: TakeQuizHeaderType) => {
  const { currQuestion, questionList } = takeQuizState;

  return (
    <div className="flex justify-between items-center w-full">
      <div className="w-full flex justify-start items-center">
        <div className="p-2 rounded-full flex justify-center items-center  cursor-pointer dark:bg-gray-700 bg-gray-100 hover:bg-green-500 dark:hover:bg-red-300">
          <X size={18} />
        </div>
        <p className="ml-6 text-lg p-1 px-2  rounded-xl dark:bg-gray-700 bg-gray-100 ">
          {`${currQuestion + 1}/${questionList.length}`}
        </p>
      </div>

      <div className="flex justify-center items-center w-full">
        <h1 className="text-2xl tracking-wider">{quiz.name}</h1>
      </div>

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
    </div>
  );
};
