import { QuestionAndResponse } from "../../takeQuiz.types";

export const Responses = ({
  questionList,
}: {
  questionList: QuestionAndResponse[];
}) => {
  return (
    <article className="w-full mt-4 sm:w-5/12 pr-4 gap-6 overflow-scroll sm:h-350 hide-scroll">
      {questionList.length > 0 && (
        <div className="h-full">
          {questionList.map((question, idx) => {
            const { selectedOption } = question;
            return (
              <article key={question._id}>
                <h1 className="text-xl mb-2">
                  <span className="mr-2">{`${idx + 1}.`}</span>
                  {`${question.question}`}
                </h1>
                <ul className={`mb-12`}>
                  {question.options.map(({ isCorrect, _id, option }) => {
                    return (
                      <li
                        className={`px-2 py-3 mt-4 rounded-xl dark:bg-gray-700 bg-gray-100 cursor-pointer transition duration-300 ease-in-out ${
                          isCorrect && `dark:bg-green-600 bg-green-400 `
                        } ${
                          selectedOption === _id &&
                          !isCorrect &&
                          `dark:bg-red-500 bg-red-400`
                        }`}
                        key={_id}
                      >{`${option}`}</li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
          {/* <h1 className="text-xl mb-8">
            {`${currQuestion + 1}. ${questionList[currQuestion].question}`}
          </h1>
          <ul className="">
            {questionList[currQuestion].options.map(({ _id, option }, idx) => {
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
            })}
          </ul> */}
        </div>
      )}
    </article>
  );
};
