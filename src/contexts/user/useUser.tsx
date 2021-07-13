import { useReducer, useEffect } from "react";
import { getUser } from "./getUser";
import { UserState } from "./user.types";
import { userReducer } from "./userReducer";

const userReducerInitialState: UserState = {
  status: "loading",
  user: null,
  error: null,
};

export const useUser = (id: string) => {
  const [userState, userDispatch] = useReducer(
    userReducer,
    userReducerInitialState
  );

  const { status, user, error } = userState;

  useEffect(() => {
    (async function () {
      const response = await getUser(id);

      if ("user" in response) {
        return userDispatch({
          type: "SET_USER",
          payload: response.user,
        });
      }
      
      return userDispatch({ type: "SET_ERROR", payload: response });
    })();
  }, [id]);

  return { status, user, error };
};
