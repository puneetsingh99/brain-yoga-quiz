import { useAuth } from "../../../contexts";
import { useUser } from "../../../contexts/user/useUser";
import { useQuiz } from "../../quiz-detail/hooks/useQuiz";
import { Navbar, NavMobile } from "../../../components";
import { Bar } from "react-chartjs-2";
import { Loader } from "../../../components";
import { Stats } from "./Stats";
import { User, LogOut } from "react-feather";
import { FloatingLogout } from "./FloatingLogout";

export const Account = () => {
  const { userId, logout } = useAuth();
  const { status, user, error, userDispatch, showChartOf } = useUser(userId);
  const quizId = showChartOf || "";

  const { quiz } = useQuiz(quizId);
  const topScorers = quiz?.topScorers;
  const quizName = quiz?.name;

  const topScorersScore = topScorers?.map((score) => score.score);
  const topScorersName = topScorers?.map((score) => score.user.username);

  const score = user?.quizzesTaken.find(
    (quiz) => quiz.quiz._id === quizId
  )?.score;

  //TODO:move this to a separate file
  const data = {
    type: "bar",
    labels: topScorersName,
    datasets: [
      {
        label: "score",
        data: topScorersScore,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Leaderboard scores",
        font: {
          size: 18,
          weight: "normal",
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Navbar />
      <main className="w-full sm:w-11/12 m-auto sm:p-4 sm:pb-8 p-2  flex justify-center items-center">
        {status === "loading" && <Loader />}
        {status === "success" && user && (
          <article className="w-full sm:max-w-800 sm:min-h-500 sm:m-auto p-4 px-6 bg-white dark:bg-gray-800 shadow-md rounded-3xl mb-24">
            <div className="flex justify-between items-center w-full mb-6 sm:mb-8">
              <h1 className="text-2xl tracking-wider">Dashboard</h1>
              <div className="flex justify-end items-center">
                <User />
                <p className="mx-2 text-lg">{`Hi, ${user.username}`}</p>
              </div>
              <div
                onClick={logout}
                className="sm:block hidden sm:flex items-center  p-2 rounded-xl dark:bg-gray-700 bg-gray-100 cursor-pointer"
              >
                <LogOut />
                <p className="text-lg ml-2">{`Log out`}</p>
              </div>
              <FloatingLogout />
            </div>
            {user.quizzesTaken.length === 0 ? (
              <div className={`text-center`}>
                <h1 className={`text-lg m-auto mb-4`}>
                  You have not yet taken any quiz
                </h1>
                <p>Visit home and take quiz to see your stats</p>
              </div>
            ) : (
              <div className="flex flex-col justify-between items-center sm:items-start sm:flex-row gap-4 sm:gap-8">
                <div className="w-full sm:w-4/12">
                  <Stats
                    quizzesTaken={user.quizzesTaken}
                    userDispatch={userDispatch}
                    showChartOf={showChartOf}
                  />
                </div>

                <div className="w-full sm:w-8/12 border border-gray-300 dark:border-gray-700 sm:p-4 p-2 rounded-3xl">
                  <div className="flex justify-between items-center sm:mb-10 mb-8">
                    <h2 className="text-lg">{quizName}</h2>
                    <h2 className="text-lg">{`Your Score: ${score}`}</h2>
                  </div>
                  <Bar data={data} options={options} type={"bar"} />
                </div>
              </div>
            )}
          </article>
        )}
        {status === "error" && (
          <div>
            <h1>{error?.message}</h1>
          </div>
        )}
      </main>
      <NavMobile />
    </>
  );
};
