import { SUBMIT_QUIZ_ACTION } from "../takeQuiz.types";

export const QuitQuizModal = ({
  dispatchSubmitQuiz,
}: {
  dispatchSubmitQuiz: React.Dispatch<SUBMIT_QUIZ_ACTION>;
}) => {
  return (
    <section className={` border-4 border-red-500`}>
      <h1>Quit Quiz modal</h1>
      <button
        onClick={() =>
          dispatchSubmitQuiz({ type: "SHOW_QUIT_QUIZ_MODAL", payload: false })
        }
      >
        Cancel
      </button>

      <button
        onClick={() => dispatchSubmitQuiz({ type: "QUIT_QUIZ", payload: true })}
      >
        Quit
      </button>
    </section>
  );
};
