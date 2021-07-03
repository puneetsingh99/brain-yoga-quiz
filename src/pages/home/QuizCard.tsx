import React from "react";
import { Quiz } from "../../types";
import { useNavigate } from "react-router-dom";
import "../../custom-styles.css";
import { routeQuizDetail } from "../../utils/routes";

export const QuizCard: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  const navigate = useNavigate();
  return (
    <article
      className="gradient-bg p-4 rounded-xl w-300 text-white sm:w-250 cursor-pointer hover:shadow-xl hover:scale-110 transition duration-300 ease-in-out"
      onClick={() => navigate(routeQuizDetail(quiz._id))}
    >
      <div>
        <img src={quiz.image} alt="describes quiz" className="mb-8" />
      </div>
      <h2 className="text-xl">{quiz.name}</h2>
    </article>
  );
};
