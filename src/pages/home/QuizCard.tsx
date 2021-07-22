import React from "react";
import { Quiz } from "../../types";
import { useNavigate } from "react-router-dom";
import "../../custom-styles.css";
import { routeQuizDetail } from "../../utils/routes";

export const QuizCard: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  const navigate = useNavigate();
  return (
    <article
      className="gradient-bg px-0 py-4  rounded-3xl w-300 sm:w-230 text-white cursor-pointer hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
      onClick={() => navigate(routeQuizDetail(quiz._id))}
    >
      <h2 className="text-xl mb-2">Quiz</h2>
      <div className="flex justify-center items-center">
        <img src={quiz.image} alt="describes quiz" className="mb-2 w-4/6" />
      </div>
      <h2 className="text-xl">{quiz.name}</h2>
    </article>
  );
};
