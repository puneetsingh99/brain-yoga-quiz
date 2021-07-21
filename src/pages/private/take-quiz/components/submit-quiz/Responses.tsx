import { QuestionAndResponse } from "../../takeQuiz.types";

export const Responses = ({
  questionList,
}: {
  questionList: QuestionAndResponse[];
}) => {
  return (
    <article className="w-full sm:w-5/12 gap-6 border overflow-scroll sm:h-300">
      <h1>Result</h1>
      {questionList.length > 0 && (
        <div className="h-full">
          {questionList.map((question) => {
            console.log("question");
            console.log(question);
            return (
              <article key={question._id}>
                <h1 className="text-xl mb-8">{question.question}</h1>;
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
