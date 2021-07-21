import { Loader } from "../../../../../components";
import { Quiz } from "../../../../../types";
import { TakeQuiz } from "../../takeQuiz.types";
import { useSubmitQuiz } from "../../useSubmitQuiz";
import { calculateScore } from "./calculateScore";
import { Responses } from "./Responses";
import { submitQuizArgs } from "./utils/submitQuizArgs";

export const SubmitQuiz = ({
  quiz,
  takeQuizState,
}: {
  quiz: Quiz;
  takeQuizState: TakeQuiz;
}) => {
  // const persistentQuizState = window.localStorage.getItem(
  //   "persistentQuizState"
  // );

  // const persistentTime = window.localStorage.getItem("timer");

  // const points: number = quiz.score;
  // const negativePoints: number = quiz.negativeScore;

  // const responses = persistentQuizState && JSON.parse(persistentQuizState);
  // const time = persistentTime && JSON.parse(persistentTime);
  // const timeInMins: number = Math.round((time / 60) * 100) / 100;

  // const score = calculateScore(responses, points, negativePoints);
  const { quizId, score, timeInMins, questionList } = submitQuizArgs(
    quiz,
    takeQuizState
  );
  const { submitQuizState } = useSubmitQuiz(quizId, score, timeInMins);
  const { status, error, updatedUser } = submitQuizState;

  console.log({ status, error, updatedUser });

  return (
    <section className="border">
      {status === "submitting" && <Loader />}
      {status === "success" && (
        <section className="flex justify-between pt-4">
          <Responses questionList={questionList} />
          {/* <article className="w-full sm:w-5/12 gap-6">
            {questionList.length > 0 && (
              <div className="h-full">
                <h1 className="text-xl mb-8">
                  {`${currQuestion + 1}. ${
                    questionList[currQuestion].question
                  }`}
                </h1>
                <ul className="">
                  {questionList[currQuestion].options.map(
                    ({ _id, option }, idx) => {
                      const isSelected =
                        questionList[currQuestion].selectedOption === _id;
                      return (
                        <li
                          onClick={() => {
                            takeQuizDispatch({
                              type: "SET_RESPONSE",
                              payload: {
                                questionId: questionList[currQuestion]._id,
                                optionId: _id,
                              },
                            });
                          }}
                          className={`px-2 py-3 mt-4 rounded-xl dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-100 cursor-pointer transition duration-300 ease-in-out ${
                            isSelected &&
                            `dark:bg-gray-500 bg-gray-200 ring-4 ring-blue-500 ring-opacity-60`
                          }`}
                          key={_id}
                        >{`${option}`}</li>
                      );
                    }
                  )}
                </ul>
              </div>
            )}
          </article> */}

          <article className="w-full sm:w-6/12 p-4 px-0 flex justify-center items-end">
            <h1>{score}</h1>
          </article>
        </section>
      )}
      {status === "error" && error && (
        <article>
          <h2>{error.message}</h2>
        </article>
      )}
    </section>
  );
};
