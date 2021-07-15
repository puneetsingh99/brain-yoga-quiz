import { UserState, USER_ACTION } from "../../types/user.types";

export const userReducer = (
  state: UserState,
  action: USER_ACTION
): UserState => {
  switch (action.type) {
    case "SET_STATUS":
      return { ...state, status: action.payload };

    case "SET_USER":
      const quizList = action.payload.quizzesTaken;
      const quizId = quizList.length !== 0 ? quizList[0].quiz._id : null;

      return {
        ...state,
        status: "success",
        user: action.payload,
        showChartOf: quizId,
      };

    case "SET_SHOW_CHART_OF":
      return { ...state, showChartOf: action.payload };

    case "SET_ERROR":
      return { ...state, status: "error", error: action.payload };

    default:
      return state;
  }
};
