import { SubmitQuizState, SUBMIT_QUIZ_ACTION } from "../takeQuiz.types";

export const Modal = ({
  submitQuizState,
  dispatchSubmitQuiz,
}: {
  submitQuizState: SubmitQuizState;
  dispatchSubmitQuiz: React.Dispatch<SUBMIT_QUIZ_ACTION>;
}) => {
  const { showSubmitQuizModal } = submitQuizState;

  const handleShowHide = () => {
    showSubmitQuizModal
      ? dispatchSubmitQuiz({
          type: "SHOW_SUBMIT_QUIZ_MODAL",
          payload: false,
        })
      : dispatchSubmitQuiz({
          type: "SHOW_QUIT_QUIZ_MODAL",
          payload: false,
        });
  };

  const handleSubmitQuit = () => {
    showSubmitQuizModal
      ? dispatchSubmitQuiz({ type: "SUBMIT_QUIZ", payload: true })
      : dispatchSubmitQuiz({ type: "QUIT_QUIZ", payload: true });
  };

  return (
    <section className={`border-4 border-red-500`}>
      <h1>{showSubmitQuizModal ? `Submit Quiz modal` : `Quit Quiz Modal`}</h1>
      <button onClick={handleShowHide}>Cancel</button>
      <button onClick={handleSubmitQuit}>
        {showSubmitQuizModal ? `Submit` : `Quit`}
      </button>
    </section>
  );
};
