import { AiOutlineTrophy } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from "react";
import { Navbar, Loader, NavMobile } from "../../components";
import { useParams, Link } from "react-router-dom";
import { useQuiz } from "./hooks/useQuiz";
import { LeaderBoard } from "./leaderboard/LeaderBoard";
import { ROUTE_TAKE_QUIZ } from "../../utils/routes";

export const QuizDetail: React.FC = () => {
  const { id } = useParams();
  const { status, quiz, error } = useQuiz(id);
  console.log("quiz");
  console.log(quiz?.topScorers);
  const [showLeaderBoard, setShowLeaderBoard] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <main className="w-11/12 m-auto">
        <section className="flex sm:flex-row flex-col justify-center items-center">
          {status === "loading" && <Loader />}
          {status === "success" && quiz && (
            <div>
              <nav className="flex justify-between items-center my-4">
                <div
                  className={`w-full py-4 flex justify-center items-center cursor-pointer hover:bg-white dark:hover:bg-gray-800 rounded-xl ${
                    !showLeaderBoard && `active dark:bg-gray-800 bg-white`
                  }`}
                  onClick={() => setShowLeaderBoard(false)}
                >
                  <BsPencilSquare size={25} />
                </div>
                <div
                  className={`w-full py-4 flex justify-center items-center cursor-pointer hover:bg-white dark:hover:bg-gray-800  rounded-xl ${
                    showLeaderBoard && `active dark:bg-gray-800 bg-white`
                  }`}
                  onClick={() => setShowLeaderBoard(true)}
                >
                  <AiOutlineTrophy size={25} />
                </div>
              </nav>
              {showLeaderBoard && <LeaderBoard topScorers={quiz.topScorers} />}
              {!showLeaderBoard && (
                <article className="w-325 h-500 sm:w-375 sm:h-450 text-lg bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                  <h2 className="text-2xl mb-4 m-auto">{`${quiz.name}`}</h2>
                  <p>{`No of questions: ${quiz.questions.length}`}</p>
                  <p>{`Duration: ${quiz.timelimit} minutes`}</p>
                  <p className="mt-4 mb-2">Rules:</p>
                  <ul className="mb-4">
                    <li className="list-disc ml-8 mb-2">{`Submit quiz before the timer expires.`}</li>
                    <li className="list-disc ml-8 mb-2">
                      <span className="font-semibold mb-2">{quiz.score}</span>
                      {` points for a correct ans`}
                    </li>
                    <li className="list-disc ml-8 mb-2">
                      {quiz.negativeScore === 0
                        ? `No negative points.`
                        : `${quiz.negativeScore} points for an incorrect answer.`}
                    </li>
                    <li className="list-disc ml-8">
                      Score high and get featured on the leaderboard!
                    </li>
                  </ul>
                  <div className="flex justify-center items-center sm:py-4">
                    <Link to={ROUTE_TAKE_QUIZ}>
                      <button className="px-4 py-2 m-auto rounded-md gradient-bg font-semibold text-white hover:scale-105 shadow-md hover:shadow-lg transition duration-100 ease-in-out">
                        Take Quiz
                      </button>
                    </Link>
                  </div>
                </article>
              )}
            </div>
          )}
          {status === "error" && error && <p>{error.message}</p>}
        </section>
      </main>
      <NavMobile />
    </>
  );
};
