import { useEffect, useReducer } from "react";
import { useAuth } from "../../../contexts";
import { useLocalStorage } from "../../../hooks";
import { useQuiz } from "../../quiz-detail/hooks/useQuiz";
import { TakeQuiz, TAKE_QUIZ_ACTION } from "./takeQuiz.types";

const setCurrQuestion = (
  operation: string,
  numOfQuestions: number,
  currQuestionNumber: number
): number => {
  switch (operation) {
    case "increment":
      if (currQuestionNumber === numOfQuestions - 1) {
        return currQuestionNumber;
      }
      return currQuestionNumber + 1;

    case "decrement":
      if (currQuestionNumber === 0) {
        return currQuestionNumber;
      }
      return currQuestionNumber - 1;

    default:
      return currQuestionNumber;
  }
};

const takeQuizInitialState: TakeQuiz = {
  currQuestion: 0,
  questionList: [],
  score: 0,
  presentInLeaderBoard: false,
};

export const useTakeQuiz = (id: string) => {
  //submit quiz
  //cancel quiz
  const { userId } = useAuth();
  const { status, quiz, error } = useQuiz(id);
  console.log({ status, quiz, error });

  const [persistentQuizState, setPersistentQuizState] = useLocalStorage(
    "persistentQuizState",
    takeQuizInitialState
  );

  console.log({ persistentQuizState });

  const takeQuizReducer = (
    state: TakeQuiz,
    action: TAKE_QUIZ_ACTION
  ): TakeQuiz => {
    switch (action.type) {
      case "SET_TAKE_QUIZ_STATE":
        const questionList = action.payload.questions.map((q) => ({
          ...q,
          selectedOption: "NA",
        }));
        const userPresent = action.payload.topScorers.find(
          (topScorer) => topScorer.user._id === userId
        );
        const presentInLeaderBoard = userPresent ? true : false;
        console.log({ presentInLeaderBoard });
        const updateQuestionList = {
          ...state,
          questionList: questionList,
          presentInLeaderBoard: presentInLeaderBoard,
        };
        setPersistentQuizState(updateQuestionList);
        return updateQuestionList;

      case "SET_RESPONSE":
        //find the question from the payload and set the selectedOptionId to the one sent in payload and update the same in the localstorage
        const { optionId, questionId } = action.payload;
        const updateState = {
          ...state,
          questionList: state.questionList.map((q) => {
            return q._id === questionId
              ? { ...q, selectedOption: optionId }
              : q;
          }),
        };
        setPersistentQuizState(updateState);
        return updateState;

      case "SET_SCORE":
        const updateScore = {
          ...state,
          score: action.payload,
        };
        setPersistentQuizState(updateScore);
        return updateScore;

      case "SET_CURRENT_QUESTION":
        const numOfQuestions = state.questionList
          ? state.questionList.length
          : 0;
        const newCurrQuestion = setCurrQuestion(
          action.payload,
          numOfQuestions,
          state.currQuestion
        );
        const updateCurrQuestion = {
          ...state,
          currQuestion: newCurrQuestion,
        };
        setPersistentQuizState(updateCurrQuestion);
        return updateCurrQuestion;

      default:
        return state;
    }
  };

  const [takeQuizState, takeQuizDispatch] = useReducer(
    takeQuizReducer,
    persistentQuizState
  );

  useEffect(() => {
    if (quiz) {
      takeQuizDispatch({ type: "SET_TAKE_QUIZ_STATE", payload: quiz });
    }

    return () => {
      window.localStorage.removeItem("persistentQuizState");
    };
  }, [quiz]);

  return {
    status,
    quiz,
    error,
    takeQuizState,
    takeQuizDispatch,
  };
};
