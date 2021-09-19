import { useReducer, useState } from "react";
import { LoginState, LoginValidation } from "./login.types";
import { loginReducer } from "./loginReducer";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts";

const initialLoginState: LoginState = {
  status: "idle",
  credentials: { username: "", password: "" },
  error: null,
};

const initialLoginFormState: LoginValidation = {
  status: "valid",
  field: "",
  showPassword: false,
};

export const useLogin = () => {
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    initialLoginState
  );
  const { username, password } = loginState.credentials;

  const [loginValidation, setLoginValidation] = useState<LoginValidation>(
    initialLoginFormState
  );

  const invalidUsername =
    loginValidation.status === "invalid" &&
    loginValidation.field === "username";

  const invalidPassword =
    loginValidation.status === "invalid" &&
    loginValidation.field === "password";

  const navigate = useNavigate();
  const location: any = useLocation();
  const { loginUserWithCredentials } = useAuth();

  const resetForm = () => {
    loginDispatch({ type: "SET_USERNAME", payload: { username: "" } });
    loginDispatch({ type: "SET_PASSWORD", payload: { password: "" } });
    setLoginValidation({
      status: "valid",
      field: "",
      showPassword: false,
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.length === 0) {
      return setLoginValidation((currState) => ({
        ...currState,
        status: "invalid",
        field: "username",
        errorMessage: "username cannot be empty",
      }));
    }
    if (password.length === 0) {
      return setLoginValidation((currState) => ({
        ...currState,
        status: "invalid",
        field: "password",
        errorMessage: "password cannot be empty",
      }));
    }
    try {
      loginDispatch({ type: "SET_STATUS", payload: "logging in" });
      const response = await loginUserWithCredentials(username, password);
      if (response.success) {
        loginDispatch({ type: "SET_STATUS", payload: "login successful" });
        resetForm();
        navigate(location.state?.from ? location.state.from : "/");
        return;
      }
      loginDispatch({ type: "SET_STATUS", payload: "error" });
      loginDispatch({ type: "SET_ERROR", payload: response });
      resetForm();
    } catch (error) {
      console.log("error coming from login form", error);
      loginDispatch({ type: "SET_STATUS", payload: "error" });
      loginDispatch({
        type: "SET_ERROR",
        payload: { success: false, message: "Something went wrong" },
      });
      resetForm();
    }
  };

  const handleGuestLogin = async () => {
    try {
      loginDispatch({ type: "SET_STATUS", payload: "logging in" });
      const response = await loginUserWithCredentials("puneet", "Puneet@123");
      if (response.success) {
        loginDispatch({ type: "SET_STATUS", payload: "login successful" });
        navigate(location.state?.from ? location.state.from : "/");
        return;
      }
      loginDispatch({ type: "SET_STATUS", payload: "error" });
      loginDispatch({ type: "SET_ERROR", payload: response });
      resetForm();
    } catch (error) {
      console.log("error coming from login form", error);
      loginDispatch({ type: "SET_STATUS", payload: "error" });
      loginDispatch({
        type: "SET_ERROR",
        payload: { success: false, message: "Something went wrong" },
      });
      resetForm();
    }
  };

  return {
    loginValidation,
    setLoginValidation,
    loginDispatch,
    handleLogin,
    handleGuestLogin,
    invalidPassword,
    invalidUsername,
    loginState,
    username,
    password,
  };
};
