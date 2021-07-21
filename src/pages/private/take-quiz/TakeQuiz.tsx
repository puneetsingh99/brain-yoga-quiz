import { useParams } from "react-router-dom";
import { Navbar, NavMobile } from "../../../components";
import { Loader } from "../../../components";
import { useTakeQuiz } from "./useTakeQuiz";
import { TakeQuizHeader } from "./components/TakeQuizHeader";
import { TakeQuizMain } from "./components/TakeQuizMain";
import { TakeQuizNav } from "./components/TakeQuizNav";
import { useState, useReducer } from "react";
import { SubmitQuizModal } from "./components/SubmitQuizModal";
import { QuitQuizModal } from "./components/QuitQuizModal";
import { SubmitQuizState } from "./takeQuiz.types";
import { submitQuizStateReducer } from "./utils/submitQuizStateReducer";
import { SubmitQuiz } from "./components/submit-quiz/SubmitQuiz";

const initialSubmitQuizState: SubmitQuizState = {
  submitQuiz: false,
  showSubmitQuizModal: false,
  quitQuiz: false,
  showQuitQuizModal: false,
};

export const TakeQuiz = () => {
  const { id } = useParams();
  const { quiz, status, error, takeQuizState, takeQuizDispatch } =
    useTakeQuiz(id);

  const [submitQuizState, dispatchSubmitQuiz] = useReducer(
    submitQuizStateReducer,
    initialSubmitQuizState
  );

  const { submitQuiz, showSubmitQuizModal, quitQuiz, showQuitQuizModal } =
    submitQuizState;

  console.log("submitQuizState");
  console.log(submitQuizState);

  const takeQuizNavProps = {
    takeQuizState,
    takeQuizDispatch,
    dispatchSubmitQuiz,
  };

  const takeQuizMainProps = {
    takeQuizState,
    takeQuizDispatch,
  };

  return (
    <>
      <Navbar />
      <main className="w-full sm:w-11/12 m-auto py-4">
        {status === "loading" && <Loader />}
        {status === "success" && quiz && (
          <article className="w-full sm:max-w-800 sm:min-h-500 m-auto p-4 px-4 sm:p-4 sm:pb-8 bg-white dark:bg-gray-800 shadow-md rounded-3xl grid grid-rows-181 gap-4">
            <TakeQuizHeader quiz={quiz} takeQuizState={takeQuizState} />

            {submitQuiz ? (
              <SubmitQuiz quiz={quiz} takeQuizState={takeQuizState} />
            ) : (
              <TakeQuizMain quiz={quiz} {...takeQuizMainProps} />
            )}

            {showSubmitQuizModal && (
              <SubmitQuizModal
                submitQuizState={submitQuizState}
                dispatchSubmitQuiz={dispatchSubmitQuiz}
              />
            )}

            {showQuitQuizModal && (
              <QuitQuizModal dispatchSubmitQuiz={dispatchSubmitQuiz} />
            )}

            <TakeQuizNav {...takeQuizNavProps} />
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
