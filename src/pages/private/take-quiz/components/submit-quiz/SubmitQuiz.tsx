import { Loader } from "../../../../../components";
import { Quiz } from "../../../../../types";
import { TakeQuiz } from "../../takeQuiz.types";
import { useSubmitQuiz } from "../../useSubmitQuiz";
import { Responses } from "./Responses";
import { Result } from "./Result";
import { submitQuizArgs } from "./utils/submitQuizArgs";

export const SubmitQuiz = ({
  quiz,
  takeQuizState,
}: {
  quiz: Quiz;
  takeQuizState: TakeQuiz;
}) => {
  const { quizId, score, timeInMins, questionList } = submitQuizArgs(
    quiz,
    takeQuizState
  );

  const { submitQuizState } = useSubmitQuiz(quizId, score, timeInMins);
  const { status, error } = submitQuizState;

  return (
    <section>
      {status === "submitting" && <Loader />}
      {status === "success" && (
        <section className="sm:flex justify-between">
          <article className="sm:hidden w-full sm:w-6/12 p-4 px-0 flex justify-center">
            <Result quizId={quiz._id} score={score} />
          </article>
          <Responses questionList={questionList} />
          <article className="hidden w-full sm:w-6/12 p-4 px-0 sm:flex justify-center">
            <Result quizId={quiz._id} score={score} />
          </article>
        </section>
      )}
      {status === "error" && error && (
        <article>
          <h2>{error.message}</h2>
        </article>
      )}
    </section>
  );
};
