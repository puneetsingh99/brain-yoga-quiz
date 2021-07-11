import { Navbar, NavMobile } from "../../components";
import { useReducer, useState, useRef, useEffect } from "react";
import { useAuth } from "../../contexts";
import { LoginState, LoginValidation } from "./login.types";
import { loginReducer } from "./loginReducer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ROUTE_SIGN_UP } from "../../utils/routes";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const initialState: LoginState = {
  status: "idle",
  credentials: { username: "", password: "" },
  error: null,
};

export const Login = () => {
  const [loginState, dispatch] = useReducer(loginReducer, initialState);
  const [loginValidation, setLoginValidation] = useState<LoginValidation>({
    status: "valid",
    field: "",
    showPassword: false,
  });
  const { loginUserWithCredentials, isUserLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location: any = useLocation();

  const focusInput = useRef<HTMLInputElement>(null);
  const { username, password } = loginState.credentials;

  useEffect(() => {
    focusInput.current && focusInput.current.focus();
  }, []);

  //why login page is scrollable
  const resetForm = () => {
    dispatch({ type: "SET_USERNAME", payload: { username: "" } });
    dispatch({ type: "SET_PASSWORD", payload: { password: "" } });
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
      dispatch({ type: "SET_STATUS", payload: "logging in" });
      const response = await loginUserWithCredentials(username, password);
      if (response.success) {
        dispatch({ type: "SET_STATUS", payload: "login successful" });
        resetForm();
        navigate(location.state?.from ? location.state.from : "/");
        //dispatch of User context goes here and user details are set
        return;
      }
      dispatch({ type: "SET_STATUS", payload: "error" });
      dispatch({ type: "SET_ERROR", payload: response });
    } catch (error) {
      console.log("error coming from login form", error);
      dispatch({ type: "SET_STATUS", payload: "error" });
      dispatch({
        type: "SET_ERROR",
        payload: { success: false, message: "Something went wrong" },
      });
      resetForm();
    }
  };

  const invalidUsername =
    loginValidation.status === "invalid" &&
    loginValidation.field === "username";

  const invalidPassword =
    loginValidation.status === "invalid" &&
    loginValidation.field === "password";

  return (
    <>
      <Navbar />
      <main className="w-11/12 m-auto p-4 flex justify-center items-center">
        <article className="w-325 h-500 sm:w-375 sm:h-450 m-auto p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl">
          <div className="pb-4 flex justify-center items-center w-full ">
            <h1 className="text-2xl tracking-wider">Login</h1>
          </div>
          <form
            onSubmit={(e) => handleLogin(e)}
            className="flex flex-col justify-between items-center"
          >
            <label className="flex flex-col w-11/12 sm:8/12">
              <p className="mb-2 text-lg">Username</p>
              <input
                type="text"
                value={username}
                onChange={(e) =>
                  dispatch({
                    type: "SET_USERNAME",
                    payload: { username: e.target.value },
                  })
                }
                className={`dark:bg-gray-700 mb-4 px-4 py-3 rounded-md focus:ring-4 focus:outline-none ring-opacity-60 border border-gray-700
                 ${invalidUsername && "ring-4 ring-red-500"}
                `}
                autoComplete="username"
                ref={focusInput}
              />
              <p className={`text-red-500 text-sm`}>{` ${
                invalidUsername ? `• ${loginValidation.errorMessage}` : ""
              } `}</p>
            </label>
            <label className="flex flex-col w-11/12 sm:8/12 mb-2 relative">
              <p className="mb-2 text-lg">Password</p>
              <input
                type={`${loginValidation.showPassword ? "text" : "password"}`}
                value={password}
                onChange={(e) =>
                  dispatch({
                    type: "SET_PASSWORD",
                    payload: { password: e.target.value },
                  })
                }
                className={`dark:bg-gray-700 mb-2 px-4 py-3 rounded-md focus:ring-4 ring-opacity-60 focus:outline-none border border-gray-700 ${
                  invalidPassword && "ring-4 ring-red-500"
                }`}
                autoComplete="current-password"
              />
              <i
                className="absolute ml-auto mr-2 z-20 w-max eye"
                onClick={(e) => {
                  setLoginValidation((currState) => ({
                    ...currState,
                    showPassword: !currState.showPassword,
                  }));
                  e.stopPropagation();
                }}
              >
                {loginValidation.showPassword ? (
                  <AiFillEye size={20} />
                ) : (
                  <AiFillEyeInvisible size={20} />
                )}
              </i>
              <div className="h-5">
                <p className={`text-red-500 text-sm `}>{` ${
                  invalidPassword ? `• ${loginValidation.errorMessage}` : ""
                } `}</p>
              </div>
            </label>
            <input
              type="submit"
              value={`${
                loginState.status === "logging in" ? "Logging in..." : "Login"
              }`}
              disabled={loginState.status === "logging in" ? true : false}
              className={`text-white mt-1 px-4 py-3 m-auto w-11/12 rounded-md gradient-bg cursor-pointer mb-4 focus:ring-4 focus:outline-none focus:ring-opacity-50 font-semibold`}
            />
            <p className="text-lg">
              Don't have an account?
              <Link to={ROUTE_SIGN_UP}>
                <span className="underline cursor-pointer font-semibold ml-2 focus:ring-4 focus:outline-none">
                  Signup
                </span>
              </Link>
            </p>
          </form>
        </article>
      </main>
      <NavMobile />
    </>
  );
};
