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
    <section
      className={`flex items-center justify-center fixed inset-0 z-40 bg-semi-transparent`}
    >
      <div
        className={`w-11/12 sm:w-200 py-4 px-2 rounded-2xl bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-100`}
      >
        <h1 className={`text-2xl mb-16 text-center`}>Are you sure?</h1>
        <div className={`flex justify-center`}>
          <button
            className={`px-3 py-2 mr-6 rounded-lg dark:bg-gray-700 bg-gray-100 dark:hover:bg-gray-600 bg-gray-200 font-semibold dark:text-gray-100 transition duration-200 ease-in-out focus:ring-4 ring-blue-500 ring-opacity-60`}
            onClick={handleShowHide}
          >
            Cancel
          </button>
          <button
            className={`px-3 py-2 rounded-lg ${
              showSubmitQuizModal
                ? `gradient-bg`
                : `bg-blue-500 hover:bg-blue-600`
            }  font-semibold text-white transition duration-100 ease-in-out cursor-pointer focus:ring-4 ring-blue-500 ring-opacity-60`}
            onClick={handleSubmitQuit}
          >
            {showSubmitQuizModal ? `Submit` : `Quit`}
          </button>
        </div>
      </div>
    </section>
  );
};
