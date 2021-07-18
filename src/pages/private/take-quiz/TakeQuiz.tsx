import { useQuiz } from "../../quiz-detail/hooks/useQuiz";
import { useParams } from "react-router-dom";
import { Navbar, NavMobile } from "../../../components";
import { Loader } from "../../../components";
import { X } from "react-feather";
import { useTakeQuiz } from "./useTakeQuiz";
import { Timer } from "./Timer";
import { formatTimer } from "./utils/formatTimer";

export const TakeQuiz = () => {
  const { id } = useParams();
  const { quiz, status, error, takeQuizState, takeQuizDispatch } =
    useTakeQuiz(id);
  // console.log("from takeQuiz");
  // console.log({ quiz, status, error, takeQuizState });
  console.log({ takeQuizState });

  //clear everything from local storage upon quitting or successfully submitting the quiz
  //return from useEffect where ever necessary
  return (
    <>
      <Navbar />
      <main className="w-full sm:w-11/12 m-auto py-4">
        {status === "loading" && <Loader />}
        {status === "success" && quiz && (
          <article className="w-full sm:w-8/12 sm:h-500 m-auto p-4 px-4 sm:p-4 bg-white dark:bg-gray-800 shadow-md rounded-3xl">
            <div className="flex justify-between items-center w-full mb-0 sm:mb-8">
              <div className="w-full flex justify-start items-center">
                <div className="p-2 rounded-full flex justify-center items-center  cursor-pointer dark:bg-gray-700 bg-gray-100 hover:bg-green-500 dark:hover:bg-red-300">
                  <X size={18} />
                </div>
                <p className="ml-6 text-lg p-1 px-2 rounded-xl dark:bg-gray-700 bg-gray-100 ">{`${
                  takeQuizState && takeQuizState.currQuestion + 1
                }/${takeQuizState.questionList.length}`}</p>
              </div>

              <div className="flex justify-center items-center w-full">
                <h1 className="text-2xl tracking-wider">{quiz.name}</h1>
              </div>

              <div className="w-full hidden sm:flex justify-end items-center">
                <div className="flex w-max items-center p-2 rounded-xl dark:bg-gray-700 bg-gray-100 cursor-pointer">
                  <h1>Timer: </h1>
                  <div className="ml-1 w-50 flex justify-end">
                    {quiz && quiz.timelimit !== 0 ? (
                      <Timer timelimit={quiz.timelimit} />
                    ) : (
                      <p>{formatTimer(0)}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button></button>

            <div className=" flex flex-col justify-between items-center sm:items-end sm:flex-row gap-4 sm:gap-8">
              <div className="w-full sm:w-4/12 border">
                {takeQuizState && takeQuizState.questionList && (
                  <h1>
                    {
                      takeQuizState.questionList[takeQuizState.currQuestion]
                        .question
                    }
                  </h1>
                )}

                <button
                  className="border border-red-500 p-2 mr-8"
                  onClick={() =>
                    takeQuizDispatch({
                      type: "SET_CURRENT_QUESTION",
                      payload: "decrement",
                    })
                  }
                >
                  {" "}
                  decrement{" "}
                </button>

                <button
                  className="border border-green-500 p-2 mr-8"
                  onClick={() =>
                    takeQuizDispatch({
                      type: "SET_CURRENT_QUESTION",
                      payload: "increment",
                    })
                  }
                >
                  {" "}
                  increment{" "}
                </button>
              </div>
              <button onClick={() => localStorage.removeItem("timer")}>
                Remove persistent Quiz state
              </button>
              <button
                onClick={() => localStorage.removeItem("persistentQuizState")}
              >
                Remove timer
              </button>
            </div>
          </article>
        )}
        {status === "error" && (
          <div className="flex items-center justify-center">
            <h1>{error?.message}</h1>
          </div>
        )}
      </main>
      <NavMobile />
    </>
  );
};
