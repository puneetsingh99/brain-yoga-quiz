import { useQuiz } from "../../../../quiz-detail/hooks/useQuiz";
import { useState, useEffect } from "react";
import { useAuth } from "../../../../../contexts";
import { Confetti } from "../Confetti";

export const Result = ({
  score,
  quizId,
}: {
  score: number;
  quizId: string;
}) => {
  const inLeaderBoard = localStorage.getItem("inLeaderBoard");
  const presentInLeaderBoard = inLeaderBoard && JSON.parse(inLeaderBoard);

  const { quiz } = useQuiz(quizId);
  const { userId } = useAuth();

  const [checkLeaderBoard, setCheckLeaderBoard] = useState(false);

  useEffect(() => {
    if (quiz) {
      const gotInLeaderBoard = quiz.topScorers.find(
        (user) => user.user._id === userId
      );
      if (gotInLeaderBoard) {
        setCheckLeaderBoard(true);
      }
    }
  }, [quiz, userId]);

  const enteredInLeaderBoard = !presentInLeaderBoard && checkLeaderBoard;

  return (
    <div className={`w-full `}>
      <div
        className={`p-4 w-max m-auto text-center text-3xl rounded-2xl mb-4 sm:mb-10 gradient-bg  text-white`}
      >
        <h1 className={`mb-2`}>Your Score</h1>
        <h1>{score}</h1>
      </div>
      <div>
        {quiz && enteredInLeaderBoard && (
          <div className={`text-center`}>
            <h1 className={`text-xl sm:text-2xl sm:mb-2`}>
              Congratulations!<span>🥳 🎉</span>
            </h1>
            <h1 className={`text-xl sm:text-2xl`}>
              You made it to the Leaderboard!
            </h1>
            <Confetti />
          </div>
        )}
      </div>
    </div>
  );
};
