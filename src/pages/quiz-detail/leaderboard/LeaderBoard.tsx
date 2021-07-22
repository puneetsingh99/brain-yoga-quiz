import { TopScorer } from "../../../types";
import { TopScoringUser } from "./TopScoringUser";
import throne from "../../../assets/throne.png";

export const LeaderBoard = ({ topScorers }: { topScorers: TopScorer[] }) => {
  console.log(topScorers);
  return (
    <article className="w-full h-500 sm:w-375 sm:h-450 text-lg text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 p-4 pt-2  rounded-3xl shadow-md">
      <div className="w-full flex justify-center px-4 pb-4 sm:pb-0">
        <h1 className="tracking-wider text-2xl mb-4">Leaderboard</h1>
      </div>
      <ul className={`border dark:border-gray-600 border-gray-200 rounded-2xl`}>
        <li
          className={`flex justify-between p-2 border-b dark:border-gray-600 border-gray-200 dark:bg-gray-700  rounded-t-2xl`}
        >
          <div>
            <p>Rank</p>
          </div>
          <div>
            <p>Player</p>
          </div>
          <div>
            <p>Score</p>
          </div>
        </li>
        {topScorers.length === 0 && (
          <div className="w-full h-400 sm:h-350 flex justify-center items-start">
            <img src={throne} alt="throne" className="w-2/4 mt-8" />
          </div>
        )}
        {topScorers.length > 0 &&
          topScorers.map((topScorer, idx) => (
            <TopScoringUser
              key={topScorer._id}
              topScorer={topScorer}
              idx={idx}
              total={topScorers.length}
            />
          ))}
      </ul>
    </article>
  );
};

{
  /* <section className="w-full rounded-2xl">
  <div>
    <div className="flex justify-between p-4 pb-2 border border-b dark:border-gray-600 border-gray-200 dark:bg-gray-700  rounded-t-2xl">
      <p>Quiz</p>
      <p>Score</p>
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
                ? `rounded-b-2xl border border-gray-300 dark:border-gray-600`
                : "border-b border-gray-300 dark:border-gray-600"
            } ${
              _id === showChartOf
                ? `bg-gray-100 dark:bg-gray-500 border dark:border-gray-600 border-gray-300 border-top-none`
                : `border dark:bg-gray-700 border-top-none`
            }`}
          >
            <h1>{name}</h1>
            <p>{score}</p>
          </li>
        );
      })}
    </ul>
  </div>
</section>; */
}
