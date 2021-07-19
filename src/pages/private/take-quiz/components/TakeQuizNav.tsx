import { Quiz } from "../../../../types";
import { TakeQuiz, TAKE_QUIZ_ACTION } from "../takeQuiz.types";

type TakeQuizNavType = {
  takeQuizState: TakeQuiz;
  takeQuizDispatch: React.Dispatch<TAKE_QUIZ_ACTION>;
};

export const TakeQuizNav = ({
  takeQuizState,
  takeQuizDispatch,
}: TakeQuizNavType) => {
  const { questionList, currQuestion } = takeQuizState;
  const numberOfQuestions = questionList.length;
  const firstQuestion = currQuestion === 0;
  const lastQuestion = currQuestion + 1 === numberOfQuestions;

  return (
    <section className={`w-full flex items-center justify-end `}>
      <div className="w-3/6 flex flex-start ">
        <div className="w-8/12   flex justify-end">
          {!firstQuestion && (
            <button
              className={`px-6 py-2 rounded-lg gradient-bg font-semibold text-white transition duration-100 ease-in-out`}
              onClick={() => {
                takeQuizDispatch({
                  type: "SET_CURRENT_QUESTION",
                  payload: "decrement",
                });
              }}
            >
              {`Previous`}
            </button>
          )}
        </div>
        <div className="w-4/12    flex justify-end">
          {lastQuestion ? (
            <button
              className={`px-6 py-2 rounded-lg gradient-bg font-semibold text-white transition duration-100 ease-in-out`}
              onClick={() => {
                console.log("handle submit");
              }}
            >
              {`Submit`}
            </button>
          ) : (
            <button
              className={`px-6 py-2 rounded-lg gradient-bg font-semibold text-white transition duration-100 ease-in-out cursor-pointer`}
              onClick={() => {
                takeQuizDispatch({
                  type: "SET_CURRENT_QUESTION",
                  payload: "increment",
                });
              }}
            >{`Next`}</button>
          )}
        </div>
      </div>
    </section>
  );
};
