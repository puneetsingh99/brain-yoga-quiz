import React from "react";
import { Quiz } from "../../types";
import { useQuiz } from "../../contexts";
import { QuizCard } from "./QuizCard";
import { Loader } from "../../components";

export const QuizList: React.FC = () => {
  const { status, quizzes, error } = useQuiz();

  return (
    <section className="text-center font-semibold mt-8 pb-24 tracking-wider ">
      {status === "loading" && <Loader />}
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
      {status === "error" && error && <p>{error.message}</p>}
    </section>
  );
};
