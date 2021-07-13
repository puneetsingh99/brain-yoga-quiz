import axios, { AxiosError } from "axios";
import { ServerError } from "../../services/serverError.types";
import { GetUserResponse } from "./user.types";
import { getUserApi } from "../../utils/urls";

export const getUser = async (
  id: string
): Promise<GetUserResponse | ServerError> => {
  try {
    const response = await axios.get<GetUserResponse>(getUserApi(id));
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
      message: "Could not retrieve the user",
      errorMessage: "Something went wrong",
    };
  }
};
