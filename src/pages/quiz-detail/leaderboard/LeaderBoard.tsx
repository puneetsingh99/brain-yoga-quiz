import { TopScorer } from "../../../types";
import { TopScoringUser } from "./TopScoringUser";
import throne from "../../../assets/throne.png";

export const LeaderBoard = ({ topScorers }: { topScorers: TopScorer[] }) => {
  console.log(topScorers);
  return (
    <article className="w-325 h-500 sm:w-375 sm:h-450 text-lg text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <ul>
        <li className="flex justify-between items-center mb-2 font-semibold ">
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
          <div className="w-full h-400 sm:h-350 flex flex-col justify-center items-center text-xl">
            <p className="text-center mb-4 font-bold">Claim your Throne!</p>
            <img src={throne} alt="throne" className="w-2/4" />
            <p className="text-center mt-4 font-bold">
              Be the first one to take this quiz
            </p>
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
