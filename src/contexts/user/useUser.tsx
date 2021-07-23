import { useReducer, useEffect } from "react";
import { getUser } from "./getUser";
import { UserState } from "../../types/user.types";
import { userReducer } from "./userReducer";

const userReducerInitialState: UserState = {
  status: "loading",
  user: null,
  error: null,
  showChartOf: null,
};

export const useUser = (id: string) => {
  const [userState, userDispatch] = useReducer(
    userReducer,
    userReducerInitialState
  );

  const { status, user, error, showChartOf } = userState;

  useEffect(() => {
    (async function () {
      const response = await getUser(id);

      if ("user" in response) {
        const { user } = response;

        return userDispatch({
          type: "SET_USER",
          payload: user,
        });
      }

      return userDispatch({ type: "SET_ERROR", payload: response });
    })();
  }, [id]);

  return { status, user, error, showChartOf, userDispatch };
};
