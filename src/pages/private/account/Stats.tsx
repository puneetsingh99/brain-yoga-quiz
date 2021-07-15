import { UserQuizData, USER_ACTION } from "../../../types";

type QuizzesTaken = {
  quizzesTaken: UserQuizData[];
  userDispatch: React.Dispatch<USER_ACTION>;
  showChartOf: string | null;
};

export const Stats = ({
  quizzesTaken,
  userDispatch,
  showChartOf,
}: QuizzesTaken) => {
  const length = quizzesTaken.length;

  return (
    <section className="w-full rounded-2xl mt-2">
      <div>
        <div className="flex justify-between p-4 pb-2 mt-4 rounded-t-2xl border-b dark:border-gray-600 border-gray-100 dark:bg-gray-700">
          <p>Quiz</p>
          <p>Your Score</p>
        </div>
        <ul>
          {quizzesTaken.map((quiz, index) => {
            const { name, _id } = quiz.quiz;
            const { score } = quiz;
            return (
              <li
                key={quiz._id}
                onClick={() =>
                  userDispatch({ type: "SET_SHOW_CHART_OF", payload: _id })
                }
                className={`flex justify-between p-4 dark:hover:bg-gray-600 cursor-pointer  ${
                  index === length - 1
                    ? `rounded-b-2xl`
                    : "border-b border-gray-100 dark:border-gray-600"
                } ${
                  _id === showChartOf
                    ? `bg-gray-100 dark:bg-gray-500`
                    : `dark:bg-gray-700`
                }`}
              >
                <h1>{name}</h1>
                <p>{score}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
