import { ServerError } from "../../../types/serverError.types";

export type LoginStatus = "idle" | "logging in" | "login successful" | "error";

export type LOGIN_ACTION =
  | { type: "SET_STATUS"; payload: LoginStatus }
  | { type: "SET_USERNAME"; payload: { username: string } }
  | { type: "SET_PASSWORD"; payload: { password: string } }
  | { type: "SET_ERROR"; payload: ServerError };

export type LoginState = {
  status: LoginStatus;
  credentials: { username: string; password: string };
  error: ServerError | null;
};

export type LoginValidation = {
  status: "valid" | "invalid";
  field: string;
  showPassword: boolean;
  errorMessage?: string;
};
