import { routeTakeQuiz } from "../../utils/routes";
import { Link } from "react-router-dom";
import { Quiz } from "../../types";
import { LeaderBoard } from "./leaderboard/LeaderBoard";

export const QuizDetailDesktop = ({ quiz, id }: { quiz: Quiz; id: string }) => {
  return (
    <section
      className={`hidden sm:block w-full sm:max-w-800 sm:min-h-500 m-auto p-4 px-4 sm:p-4 sm:pb-8 bg-white dark:bg-gray-800 shadow-md rounded-3xl gap-4`}
    >
      <div className="w-full flex justify-center px-4 pb-4 sm:pb-0">
        <h2 className="text-2xl mb-4 m-auto">{`${quiz.name}`}</h2>
      </div>
      <section className={`flex gap-8 justify-between`}>
        <article className="hidden sm:block w-full sm:w-375 text-lg dark:text-gray-300 text-gray-600 bg-white dark:bg-gray-800 p-4 rounded-3xl">
          <p>{`No of questions: ${quiz.questions.length}`}</p>
          <p>{`Duration: ${quiz.timelimit} minutes`}</p>
          <p className="mt-4 mb-2">Rules:</p>
          <ul className="mb-4">
            <li className="list-disc ml-8 mb-2">{`Submit quiz before the timer expires.`}</li>
            <li className="list-disc ml-8 mb-2">
              <span className="mb-2">{quiz.score}</span>
              {` points for correct answer.`}
            </li>
            <li className="list-disc ml-8 mb-2">
              {quiz.negativeScore === 0 ? (
                `No negative points.`
              ) : (
                <p>
                  <span>{quiz.negativeScore}</span> points for an incorrect
                  answer.
                </p>
              )}
            </li>
            <li className="list-disc ml-8">
              Score high and get featured on the leaderboard!
            </li>
          </ul>
          <div className="flex justify-center items-center sm:py-4">
            <Link to={routeTakeQuiz(id)}>
              <button className="px-8 py-2 m-auto rounded-lg gradient-bg font-semibold text-white hover:scale-105 shadow-md hover:shadow-lg transition duration-100 ease-in-out">
                Take Quiz
              </button>
            </Link>
          </div>
        </article>
        <article className={`mr-4`}>
          <LeaderBoard topScorers={quiz.topScorers} />
        </article>
      </section>
    </section>
  );
};
