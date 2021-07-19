import { Quiz } from "../../../types";

export type Response = {
  questionId: string;
  optionId: string;
};

export type Option = {
  _id: string;
  option: string;
  isCorrect: boolean;
};

export type Question = {
  _id: string;
  question: string;
  options: Option[];
};

export type QuestionAndResponse = {
  _id: string;
  question: string;
  options: Option[];
  selectedOption: "NA" | string;
};

export type TakeQuiz = {
  currQuestion: number;
  questionList: QuestionAndResponse[];
  score: number;
  presentInLeaderBoard: boolean;
};

export type TAKE_QUIZ_ACTION =
  | { type: "SET_SCORE"; payload: number }
  | { type: "SET_QUESTION_LIST"; payload: Question[] }
  | { type: "SET_RESPONSE"; payload: Response }
  | { type: "SET_CURRENT_QUESTION"; payload: "increment" | "decrement" }
  | { type: "SET_CONFETTI"; payload: boolean };
