import { useReducer, useState } from "react";
import { SignupState, SignupValidation } from "./signup.types";
import { signupReducer } from "./signupReducer";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts";
import { validatePassword } from "./validatePassword";

const initialSignupState: SignupState = {
  status: "idle",
  credentials: { name: "", username: "", password: "", confirmPassword: "" },
  error: null,
};

const initialSignupFormState: SignupValidation = {
  status: "valid",
  field: "",
  showPassword: false,
  showConfirmPassword: false,
};

export const useSignup = () => {
  const [signupState, signupDispatch] = useReducer(
    signupReducer,
    initialSignupState
  );
  const { name, username, password, confirmPassword } = signupState.credentials;

  const [signupValidation, setSignupValidation] = useState<SignupValidation>(
    initialSignupFormState
  );

  const invalidName =
    signupValidation.status === "invalid" && signupValidation.field === "name";

  const invalidUsername =
    signupValidation.status === "invalid" &&
    signupValidation.field === "username";

  const invalidPassword =
    signupValidation.status === "invalid" &&
    signupValidation.field === "password";

  const invalidConfirmPassword =
    signupValidation.status === "invalid" &&
    signupValidation.field === "confirmPassword";

  const navigate = useNavigate();
  const location: any = useLocation();
  const { signupUser } = useAuth();

  const resetSignupForm = () => {
    signupDispatch({ type: "SET_NAME", payload: { name: "" } });
    signupDispatch({ type: "SET_USERNAME", payload: { username: "" } });
    signupDispatch({ type: "SET_PASSWORD", payload: { password: "" } });
    signupDispatch({
      type: "SET_CONFIRM_PASSWORD",
      payload: { confirmPassword: "" },
    });

    setSignupValidation({
      status: "valid",
      field: "",
      showPassword: false,
      showConfirmPassword: false,
    });
  };

  const lengthValidation = () => {
    if (name.length === 0) {
      return setSignupValidation((currState) => ({
        ...currState,
        status: "invalid",
        field: "name",
        errorMessage: "name cannot be empty",
      }));
    }

    if (username.length === 0) {
      return setSignupValidation((currState) => ({
        ...currState,
        status: "invalid",
        field: "username",
        errorMessage: "username cannot be empty",
      }));
    }

    if (username.length > 12) {
      return setSignupValidation((currState) => ({
        ...currState,
        status: "invalid",
        field: "username",
        errorMessage: "max length: 12 characters",
      }));
    }

    if (password.length === 0) {
      return setSignupValidation((currState) => ({
        ...currState,
        status: "invalid",
        field: "password",
        errorMessage: "password cannot be empty",
      }));
    }

    if (password.length < 6) {
      return setSignupValidation((currState) => ({
        ...currState,
        status: "invalid",
        field: "password",
        errorMessage: "must be atleast 6 characters long.",
      }));
    }
    return "pass";
  };

  const passwordValidation = () => {
    if (password !== confirmPassword) {
      return setSignupValidation((currState) => ({
        ...currState,
        status: "invalid",
        field: "confirmPassword",
        errorMessage: "passwords do not match",
      }));
    }
    return "pass";
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (lengthValidation() !== "pass") {
      return;
    }

    const passwordCheck = validatePassword(password);
    if (passwordCheck !== "pass") {
      return setSignupValidation((currState) => ({
        ...currState,
        status: "invalid",
        field: "password",
        errorMessage: passwordCheck,
      }));
    }

    if (confirmPassword.length === 0) {
      return setSignupValidation((currState) => ({
        ...currState,
        status: "invalid",
        field: "confirmPassword",
        errorMessage: "confirm password cannot be empty",
      }));
    }

    if (passwordValidation() !== "pass") {
      return;
    }

    try {
      signupDispatch({ type: "SET_STATUS", payload: "signing in" });
      const response = await signupUser(name, username, password);
      if (response.success) {
        signupDispatch({ type: "SET_STATUS", payload: "signup successful" });
        resetSignupForm();
        navigate(location.state?.from ? location.state.from : "/");
        //loginDispatch of User context goes here and user details are set
        return;
      }
      signupDispatch({ type: "SET_STATUS", payload: "error" });
      signupDispatch({ type: "SET_ERROR", payload: response });
      resetSignupForm();
    } catch (error) {
      console.log("error coming from login form", error);
      signupDispatch({ type: "SET_STATUS", payload: "error" });
      signupDispatch({
        type: "SET_ERROR",
        payload: { success: false, message: "Something went wrong" },
      });
      resetSignupForm();
    }
  };

  return {
    signupValidation,
    setSignupValidation,
    signupDispatch,
    handleSignup,
    invalidName,
    invalidConfirmPassword,
    invalidPassword,
    invalidUsername,
    signupState,
    name,
    username,
    password,
    confirmPassword,
  };
};
