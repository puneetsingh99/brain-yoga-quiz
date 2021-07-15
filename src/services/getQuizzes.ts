import { Quiz } from "../types";
import { ServerError } from "../types/serverError.types";
import axios, { AxiosError } from "axios";
import { API_QUIZZES } from "../utils/urls";

export type QuizList = {
  success: true;
  message: "Quizzes retrieved successfully";
  quizzes: Quiz[];
};

export const getQuizzes = async (): Promise<QuizList | ServerError> => {
  try {
    const response = await axios.get<QuizList>(API_QUIZZES);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }

    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
