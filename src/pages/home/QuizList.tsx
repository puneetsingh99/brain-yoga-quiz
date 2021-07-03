import React from "react";
import { Quiz } from "../../types";
import { useQuiz } from "../../contexts";
import { QuizCard } from "./QuizCard";

export const QuizList: React.FC = () => {
  const { status, quizzes, error } = useQuiz();

  return (
    <section className="text-center font-semibold mt-8 pb-8 tracking-wider">
      <h1 className="text-3xl text-start text-black dark:text-white">
        Finance Quiz
      </h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "success" && (
        <ul className="flex flex-wrap justify-center sm:justify-start gap-12 mt-8">
          {quizzes?.map((quiz: Quiz) => {
            return (
              <li key={quiz._id}>
                <QuizCard quiz={quiz} />
              </li>
            );
          })}
        </ul>
      )}
      {status === "error" && <p>{error}</p>}
    </section>
  );
};
