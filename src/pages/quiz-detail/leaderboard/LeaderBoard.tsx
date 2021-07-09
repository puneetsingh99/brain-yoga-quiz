import { TopScorer } from "../../../types";
import { TopScoringUser } from "./TopScoringUser";

export const LeaderBoard = ({ topScorers }: { topScorers: TopScorer[] }) => {
  console.log(topScorers);
  return (
    <article className="w-325 sm:w-375 text-lg text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <ul>
        <li className="flex justify-between items-center mb-2 font-semibold ">
          <div>
            <p>Rank</p>
          </div>
          <div>
            <p>User</p>
          </div>
          <div>
            <p>Score</p>
          </div>
        </li>
        {topScorers.map((topScorer) => (
          <TopScoringUser key={topScorer._id} topScorer={topScorer} />
        ))}
      </ul>
    </article>
  );
};
