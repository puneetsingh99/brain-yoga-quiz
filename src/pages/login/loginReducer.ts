import { LoginState, LOGIN_ACTION } from "./login.types";

export const loginReducer = (
  state: LoginState,
  action: LOGIN_ACTION
): LoginState => {
  switch (action.type) {
    case "SET_STATUS":
      return { ...state, status: action.payload };

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

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
