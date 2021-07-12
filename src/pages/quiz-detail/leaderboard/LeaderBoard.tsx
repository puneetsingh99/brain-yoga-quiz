import { TopScorer } from "../../../types";
import { TopScoringUser } from "./TopScoringUser";
import throne from "../../../assets/throne.png";

export const LeaderBoard = ({ topScorers }: { topScorers: TopScorer[] }) => {
  console.log(topScorers);
  return (
    <article className="w-full border  h-500 sm:w-375 sm:h-450 text-lg text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 p-4 rounded-3xl shadow-md">
      <div className="w-full flex justify-center px-4 pb-4 sm:pb-0">
        <h1 className="tracking-wider text-2xl mb-2">Leaderboard</h1>
      </div>
      <ul>
        <li className="flex justify-between items-center font-semibold ">
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
          topScorers.map((topScorer) => (
            <TopScoringUser key={topScorer._id} topScorer={topScorer} />
          ))}
      </ul>
    </article>
  );
};
