import { TopScorer } from "../../../types";
import { TopScoringUser } from "./TopScoringUser";
import throne from "../../../assets/throne.png";

export const LeaderBoard = ({ topScorers }: { topScorers: TopScorer[] }) => {
  return (
    <article className="w-full h-500 sm:w-300 sm:m-auto sm:h-auto text-lg text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 p-4 pt-2  sm:p-0 rounded-3xl shadow-md sm:shadow-none">
      <div className="w-full flex justify-center px-4 pb-4 sm:pb-0">
        <h1 className="tracking-wider text-2xl sm:text-xl mb-4">Leaderboard</h1>
      </div>
      <ul
        className={`w-11/12 sm:w-full m-auto border dark:border-gray-600 border-gray-200 rounded-2xl`}
      >
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
