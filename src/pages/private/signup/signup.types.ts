import { ServerError } from "../../../services/serverError.types";

export type SignupStatus =
  | "idle"
  | "signing in"
  | "signup successful"
  | "error";

export type SIGNUP_ACTION =
  | { type: "SET_STATUS"; payload: SignupStatus }
  | { type: "SET_NAME"; payload: { name: string } }
  | { type: "SET_USERNAME"; payload: { username: string } }
  | { type: "SET_PASSWORD"; payload: { password: string } }
  | { type: "SET_CONFIRM_PASSWORD"; payload: { confirmPassword: string } }
  | { type: "SET_ERROR"; payload: ServerError };

export type SignupState = {
  status: SignupStatus;
  credentials: {
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
  };
  error: ServerError | null;
};

export type SignupValidation = {
  status: string;
  field: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
  errorMessage?: string;
};
