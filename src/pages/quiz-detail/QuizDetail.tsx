import { Navbar, Loader, NavMobile } from "../../components";
import { useParams } from "react-router-dom";
import { useQuiz } from "./hooks/useQuiz";
// import { LeaderBoard } from "./LeaderBoard";";

export const QuizDetail: React.FC = () => {
  const { id } = useParams();
  const { status, quiz, error } = useQuiz(id);

  return (
    <>
      <Navbar />
      <main className="w-11/12 m-auto mt-8">
        <section>
          {status === "loading" && <Loader />}
          {status === "success" && quiz && (
            <div className="w-11/12 sm:w-8/12 m-auto flex sm:flex-row flex-col justify-center items-center ">
              <article className="w-325 sm:w-400 text-lg bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                <h2 className="text-2xl mb-4 m-auto">{`${quiz.name}`}</h2>
                <p>{`No of questions: ${quiz.questions.length}`}</p>
                <p>{`Duration: ${quiz.timelimit} minutes`}</p>
                <p className="mt-4 mb-2">Rules:</p>
                <ul className="mb-4">
                  <li className="list-disc ml-8 mb-2">{`Submit quiz before the timer expires.`}</li>
                  <li className="list-disc ml-8 mb-2">
                    {`Every correct answer fetches `}
                    <span className="font-semibold mb-2">{quiz.score}</span>
                    {` points.`}
                  </li>
                  <li className="list-disc ml-8 mb-2">
                    {quiz.negativeScore === 0
                      ? `No negative points for incorrect questions.`
                      : `${quiz.negativeScore} points will get deducted for incorrect answer.`}
                  </li>
                  <li className="list-disc ml-8">
                    Score high and get featured on the leaderboard!
                  </li>
                </ul>
                <div className="flex justify-center items-center">
                  <button className="px-4 py-2 m-auto rounded-md gradient-bg font-semibold text-white hover:scale-105 shadow-md hover:shadow-lg transition duration-100 ease-in-out">
                    Take Quiz
                  </button>
                </div>
              </article>
              {/* <LeaderBoard topScorers={quiz?.topScorers} /> */}
            </div>
          )}
          {status === "error" && <p>{error?.errorMessage}</p>}
        </section>
      </main>
      <NavMobile />
    </>
  );
};
