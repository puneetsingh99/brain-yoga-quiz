import { ServerError } from "../services/serverError.types";
import { Status } from "./status.types";

export type ACTIONTYPE =
  | {
      type: "SET_STATUS";
      payload: "loading" | "success" | "error";
    }
  | {
      type: "SET_QUIZZES";
      payload: Quiz[];
    }
  | {
      type: "SET_ERROR";
      payload: ServerError;
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

export type TopScorers = {
  _id: string;
  user: string;
  rank: number;
  score: number;
  timeTaken: number;
};

export type Quiz = {
  _id: string;
  name: string;
  image: string;
  timelimit: number;
  score: number;
  negativeScore: number;
  questions: Question[];
  createdBy: string;
  topScorers: TopScorers[];
  createdAt: string;
  updatedAt?: string;
};

export type User = {
  name: String;
  username: String;
  quizzesTaken: Quiz[];
  createdAt: string;
  updatedAt: string;
};

export type QuizzesContext = {
  status: Status;
  quizzes: Quiz[] | null;
  error: ServerError | null;
};
