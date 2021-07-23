import { SignupState, SIGNUP_ACTION } from "./signup.types";

export const signupReducer = (
  state: SignupState,
  action: SIGNUP_ACTION
): SignupState => {
  switch (action.type) {
    case "SET_STATUS":
      return { ...state, status: action.payload };

    case "SET_NAME":
      return {
        ...state,
        credentials: {
          ...state.credentials,
          name: action.payload.name,
        },
      };

    case "SET_USERNAME":
      return {
        ...state,
        credentials: {
          ...state.credentials,
          username: action.payload.username,
        },
      };

    case "SET_PASSWORD":
      return {
        ...state,
        credentials: {
          ...state.credentials,
          password: action.payload.password,
        },
      };

    case "SET_CONFIRM_PASSWORD":
      return {
        ...state,
        credentials: {
          ...state.credentials,
          confirmPassword: action.payload.confirmPassword,
        },
      };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
