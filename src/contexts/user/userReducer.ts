import { UserState, USER_ACTION } from "./user.types";

export const userReducer = (
  state: UserState,
  action: USER_ACTION
): UserState => {
  switch (action.type) {
    case "SET_STATUS":
      return { ...state, status: action.payload };

    case "SET_USER":
      return { ...state, status: "success", user: action.payload };

    case "SET_ERROR":
      return { ...state, status: "error", error: action.payload };

    default:
      return state;
  }
};
