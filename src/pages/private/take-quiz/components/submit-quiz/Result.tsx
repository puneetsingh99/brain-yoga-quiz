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
        console.log({ gotInLeaderBoard });
        setCheckLeaderBoard(true);
      }
    }
  }, [quiz]);

  console.log({ checkLeaderBoard, presentInLeaderBoard });

  const enteredInLeaderBoard = !presentInLeaderBoard && checkLeaderBoard;
  console.log({ enteredInLeaderBoard });

  return (
    <div className={`w-full `}>
      <div
        className={`p-4 w-max m-auto text-center text-3xl rounded-2xl shadow-lg mb-10`}
      >
        <h1 className={`mb-2`}>Your Score</h1>
        <h1>{score}</h1>
      </div>
      <div>
        {quiz && enteredInLeaderBoard && (
          <div className={`text-center`}>
            <h1 className={`text-2xl mb-2`}>
              Congratulations!<span>🥳 🎉</span>
            </h1>
            <h1 className={`text-2xl`}>You made it to the Leaderboard!</h1>
            <Confetti />
          </div>
        )}
      </div>
    </div>
  );
};
