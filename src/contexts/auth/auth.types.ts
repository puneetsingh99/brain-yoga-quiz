import { ServerError } from "../../services/serverError.types";

export type QuizTaken = {
  _id: string;
  quiz: {
    _id: string;
    name: string;
  };
  score: number;
  timeTaken: number;
};

export type LoginUser = {
  userId: string;
  username: string;
  token: string;
  quizzesTaken: QuizTaken[];
};

export type SignupUser = {
  userId: string;
  name: string;
  username: string;
  token: string;
  quizzesTaken: QuizTaken[];
};

export type LoginResponse = {
  success: true;
  message: "Login successful";
  user: LoginUser;
};

export type SignupResponse = {
  success: true;
  message: "User added successfully";
  user: SignupUser;
};

export type AuthProviderContext = {
  isUserLoggedIn: boolean;
  loginUserWithCredentials: (
    username: string,
    password: string
  ) => Promise<LoginResponse | ServerError>;
  logout: () => void;
  token: string;
  userId: string;
  signupUser: (
    name: string,
    username: string,
    password: string
  ) => Promise<SignupResponse | ServerError>;
};

export type LocalStorageLogin = {
  isUserLoggedIn: boolean;
  token: string | "no token";
  userId: string;
};
