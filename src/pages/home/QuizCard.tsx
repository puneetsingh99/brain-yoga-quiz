import React from "react";
import { Quiz } from "../../types";
import "../../custom-styles.css";

export const QuizCard: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  return (
    <article className="gradient-bg p-4 rounded-xl w-300 sm:w-250 cursor-pointer">
      <div>
        <img src={quiz.image} alt="describes quiz" className="mb-8" />
      </div>
      <h2 className="text-xl">{quiz.name}</h2>
    </article>
  );
};
