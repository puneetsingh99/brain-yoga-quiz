import { useAuth } from "../../../contexts";
import { useUser } from "../../../contexts/user/useUser";
import { useQuiz } from "../../quiz-detail/hooks/useQuiz";
import { Navbar, NavMobile } from "../../../components";
import { Bar } from "react-chartjs-2";
import { Loader } from "../../../components";
import { Stats } from "./Stats";
import { User, LogOut } from "react-feather";

export const Account = () => {
  const { userId, logout } = useAuth();
  const { status, user, error, userDispatch, showChartOf } = useUser(userId);
  const quizId = showChartOf || "";

  console.log(error);
  const { quiz } = useQuiz(quizId);
  const topScorers = quiz?.topScorers;
  const quizName = quiz?.name;

  const topScorersScore = topScorers?.map((score) => score.score);
  const topScorersName = topScorers?.map((score) => score.user.username);

  const score = user?.quizzesTaken.find(
    (quiz) => quiz.quiz._id === quizId
  )?.score;

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
      <main className="w-full sm:w-11/12 m-auto p-2 flex justify-center items-center">
        {status === "loading" && <Loader />}
        {status === "success" && user && (
          <article className="w-full sm:w-8/12 sm:h-500 m-auto p-4 bg-white dark:bg-gray-800 shadow-md rounded-3xl">
            <div className="flex justify-between items-center w-full mb-8">
              <h1 className="text-2xl tracking-wider">Dashboard</h1>
              <div className="flex justify-end items-center">
                <User />
                <p className="mx-2 text-lg">{`Hi, ${user.username}`}</p>
              </div>
              <div
                onClick={logout}
                className="hidden sm:inline-block flex justify-end items-center p-2 rounded-xl bg-gray-700 cursor-pointer"
              >
                <LogOut />
                <p className="mx-2 text-lg">{`Logout`}</p>
              </div>
            </div>
            <div className=" flex flex-col justify-between items-center sm:items-end sm:flex-row gap-4 sm:gap-8">
              <div className="w-full sm:w-4/12">
                <Stats
                  quizzesTaken={user.quizzesTaken}
                  userDispatch={userDispatch}
                  showChartOf={showChartOf}
                />
              </div>

              <div className="w-full sm:w-8/12">
                <div className="flex justify-between items-center sm:mb-12">
                  <h2 className="text-lg">{quizName}</h2>
                  <h2 className="text-lg">{`Your Score: ${score}`}</h2>
                </div>
                <Bar data={data} options={options} type={"bar"} />
              </div>
            </div>
          </article>
        )}
      </main>
      <NavMobile />
    </>
  );
};
