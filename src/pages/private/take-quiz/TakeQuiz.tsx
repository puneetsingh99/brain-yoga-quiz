import { useParams } from "react-router-dom";
import { Navbar, NavMobile } from "../../../components";
import { Loader } from "../../../components";
import { useTakeQuiz } from "./useTakeQuiz";
import { TakeQuizHeader } from "./components/TakeQuizHeader";
import { TakeQuizMain } from "./components/TakeQuizMain";
import { TakeQuizNav } from "./components/TakeQuizNav";

export const TakeQuiz = () => {
  const { id } = useParams();
  const { quiz, status, error, takeQuizState, takeQuizDispatch } =
    useTakeQuiz(id);

  return (
    <>
      <Navbar />
      <main className="w-full sm:w-11/12 m-auto py-4">
        {status === "loading" && <Loader />}
        {status === "success" && quiz && (
          <article className="w-full sm:w-8/12 sm:h-500 m-auto p-4 px-4 sm:p-4 sm:pb-8 bg-white dark:bg-gray-800 shadow-md rounded-3xl grid grid-rows-181 gap-4">
            <TakeQuizHeader quiz={quiz} takeQuizState={takeQuizState} />

            <TakeQuizMain
              quiz={quiz}
              takeQuizState={takeQuizState}
              takeQuizDispatch={takeQuizDispatch}
            />

            <TakeQuizNav
              takeQuizState={takeQuizState}
              takeQuizDispatch={takeQuizDispatch}
            />
          </article>
        )}
        {status === "error" && (
          <div className="flex items-center justify-center">
            <h1>{error?.message}</h1>
          </div>
        )}
      </main>
      <NavMobile />
    </>
  );
};
