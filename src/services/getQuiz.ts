import { Quiz } from "../types";
import { ServerError } from "./serverError.types";
import axios, { AxiosError } from "axios";
import { getQuizApi } from "../utils/urls";

export type QuizResponse = {
  success: true;
  message: string;
  quiz: Quiz;
};

export const getQuiz = async (
  id: string
): Promise<QuizResponse | ServerError> => {
  try {
    const response = await axios.get<QuizResponse>(getQuizApi(id));
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
      errorMessage: "something went wrong!",
    };
  }
};
