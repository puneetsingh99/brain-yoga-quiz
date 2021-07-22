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

export const TopScoringUser = ({
  topScorer,
  idx,
  total,
}: {
  topScorer: TopScorer;
  idx: number;
  total: number;
}) => {
  const { username } = topScorer.user;
  const { rank, score } = topScorer;
  return (
    <li
      className={`flex justify-between px-2 py-2 ${
        idx === total - 1
          ? `rounded-b-2xl `
          : "border-b border-gray-300 dark:border-gray-600"
      } `}
    >
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
        <h2 className="ml-12 sm:ml-14">{username}</h2>
      </div>
      <div className="w-3/12 text-gray-900 dark:text-gray-100">
        <p className="ml-14 sm:ml-14">{score}</p>
      </div>
    </li>
  );
};
