import { Quiz } from "../../../../types";
import { TakeQuiz, TAKE_QUIZ_ACTION } from "../takeQuiz.types";
import test_img from "../../../../assets/test_img.jpg";

type TakeQuizMainType = {
  quiz: Quiz;
  takeQuizState: TakeQuiz;
  takeQuizDispatch: React.Dispatch<TAKE_QUIZ_ACTION>;
};

export const TakeQuizMain = ({
  quiz,
  takeQuizState,
  takeQuizDispatch,
}: TakeQuizMainType) => {
  const { currQuestion, questionList } = takeQuizState;

  return (
    <section className="sm:flex justify-between sm:pt-4 mb-4">
      <article className="w-full sm:w-5/12 gap-6">
        {questionList.length > 0 && (
          <div className="sm:h-full">
            <h1 className="text-xl sm:mb-8 mb-4">
              {`${currQuestion + 1}. ${questionList[currQuestion].question}`}
            </h1>
            <div className="sm:hidden w-full sm:w-6/12 sm:p-4 px-0 sm:flex justify-center items-end">
              <img
                className="rounded-2xl border dark:border-gray-700 border-gray-200"
                src={test_img}
                alt="helps explaining the question"
              />
            </div>
            <ul>
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
                      className={`px-2 py-3 mt-4 rounded-xl dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-100 cursor-pointer transition duration-100 ease-in-out ${
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
      </article>

      <div className="hidden w-full sm:w-6/12 p-4 px-0 sm:flex justify-center items-end">
        <img
          className="rounded-2xl border dark:border-gray-700 border-gray-200"
          src={test_img}
          alt="helps explaining the question"
        />
      </div>
    </section>
  );
};
