import { ServerError } from "../types/serverError.types";
import axios, { AxiosError } from "axios";
import { submitQuizApi } from "../utils/urls";
import {
  SubmitQuizPayload,
  SubmitQuizResponse,
} from "../types/submitQuiz.types";

export const submitQuiz = async (
  userId: string,
  payload: SubmitQuizPayload
): Promise<SubmitQuizResponse | ServerError> => {
  try {
    const response = await axios.post<SubmitQuizResponse>(
      submitQuizApi(userId),
      payload
    );
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
      message: "Could not submit the quiz",
      errorMessage: "Something went wrong",
    };
  }
};
