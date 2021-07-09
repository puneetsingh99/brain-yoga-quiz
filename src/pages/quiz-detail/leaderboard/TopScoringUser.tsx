import { TopScorer } from "../../../types";

const medals = {
  gold: "https://res.cloudinary.com/dxeyjgsl5/image/upload/v1625779078/quiz-app/crown-gold_nqh4xe.png",
  silver:
    "https://res.cloudinary.com/dxeyjgsl5/image/upload/v1625779078/quiz-app/crown-silver_lu1r3e.png",
  bronze:
    "https://res.cloudinary.com/dxeyjgsl5/image/upload/v1625779078/quiz-app/crown-bronze_y70cvd.png",
};

const giveMedal = (rank: number): string => {
  switch (rank) {
    case 1:
      return medals.gold;
    case 2:
      return medals.silver;
    case 3:
      return medals.bronze;
    default:
      throw new Error("Medals are only given to ranks 1,2 and 3");
  }
};

export const TopScoringUser = ({ topScorer }: { topScorer: TopScorer }) => {
  const { username } = topScorer.user;
  const { rank, score } = topScorer;
  return (
    <li className="w-full flex justify-between items-center px-2 pb-2 rounded text-white text-gray-900 dark:text-gray-100">
      {[1, 2, 3].includes(rank) ? (
        <div className="w-3/12 flex justify-start items-center">
          <img src={giveMedal(rank)} alt="crown" className="w-6 h-6" />
        </div>
      ) : (
        <div className="w-3/12 text-gray-900 dark:text-gray-100">
          <h2 className="ml-1">{rank} </h2>
        </div>
      )}
      <div className="w-6/12 flex justify-start items-center text-gray-900 dark:text-gray-100">
        <h2 className="ml-12">{username}</h2>
      </div>
      <div className="w-3/12 text-gray-900 dark:text-gray-100">
        <p className="ml-12">{score}</p>
      </div>
    </li>
  );
};
