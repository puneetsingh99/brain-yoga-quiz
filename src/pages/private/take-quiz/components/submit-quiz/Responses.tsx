import { QuestionAndResponse } from "../../takeQuiz.types";

export const Responses = ({
  questionList,
}: {
  questionList: QuestionAndResponse[];
}) => {
  return (
    <article className="w-full sm:mt-4 sm:w-5/12 sm:pr-4 gap-6 overflow-scroll h-350 sm:h-350 hide-scroll">
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
        </div>
      )}
    </article>
  );
};
