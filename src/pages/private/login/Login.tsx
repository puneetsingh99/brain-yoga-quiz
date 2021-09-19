import { Navbar, NavMobile } from "../../../components";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTE_SIGN_UP } from "../../../utils/routes";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useLogin } from "./useLogin";

export const Login = () => {
  const {
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
  } = useLogin();

  const focusInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusInput.current && focusInput.current.focus();
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full sm:w-11/12 m-auto py-4 px-2 flex justify-center items-center">
        <article className="w-full h-500 sm:w-375 sm:h-500 m-auto py-4 px-2 bg-white dark:bg-gray-800 shadow-md rounded-3xl">
          <div className="flex flex-col justify-center items-center w-full ">
            <h1 className="mb-2 text-2xl tracking-wider">Login</h1>
            <div className="h-2">
              <p className="text-sm text-red-500 font-semibold">
                {loginState.status === "error" &&
                  `• ${loginState.error?.message}`}
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) => handleLogin(e)}
            className="flex flex-col justify-between items-center mt-2"
          >
            <label className="flex flex-col w-11/12 sm:8/12">
              <p className="mb-2 text-lg">Username</p>
              <input
                type="text"
                value={username}
                onChange={(e) =>
                  loginDispatch({
                    type: "SET_USERNAME",
                    payload: { username: e.target.value },
                  })
                }
                className={`dark:bg-gray-700 mb-2 px-4 py-3 rounded-lg focus:ring-4 focus:outline-none ring-opacity-60 border border-gray-700
                 ${invalidUsername && "ring-4 ring-red-500"}
                `}
                autoComplete="username"
                ref={focusInput}
              />
              <p className={`text-red-500 text-sm font-semibold`}>{` ${
                invalidUsername ? `• ${loginValidation.errorMessage}` : ""
              } `}</p>
            </label>
            <label className="flex flex-col w-11/12 sm:8/12 mb-2 relative">
              <p className="mb-2 text-lg">Password</p>
              <input
                type={`${loginValidation.showPassword ? "text" : "password"}`}
                value={password}
                onChange={(e) =>
                  loginDispatch({
                    type: "SET_PASSWORD",
                    payload: { password: e.target.value },
                  })
                }
                className={`dark:bg-gray-700 mb-2 px-4 py-3 rounded-lg focus:ring-4 ring-opacity-60 focus:outline-none border border-gray-700 ${
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
                <p className={`text-red-500 text-sm font-semibold`}>{` ${
                  invalidPassword ? `• ${loginValidation.errorMessage}` : ""
                } `}</p>
              </div>
            </label>
            <input
              type="submit"
              value={
                loginState.status === "logging in" ? "Logging in..." : "Log in"
              }
              disabled={loginState.status === "logging in" ? true : false}
              className={`text-white mt-1 px-4 py-3 m-auto w-11/12 rounded-lg gradient-bg cursor-pointer mb-4 focus:ring-4 focus:outline-none focus:ring-opacity-50 font-semibold`}
            />

            <button
              onClick={handleGuestLogin}
              disabled={loginState.status === "logging in" ? true : false}
              className={`text-white mt-1 px-4 py-3 m-auto w-11/12 rounded-lg gradient-bg cursor-pointer mb-4 focus:ring-4 focus:outline-none focus:ring-opacity-50 font-semibold`}
            >
              {loginState.status === "logging in"
                ? "Logging in..."
                : "Log in as a guest"}
            </button>
            <p className="text-lg">
              Don't have an account?
              <Link to={ROUTE_SIGN_UP}>
                <span className="cursor-pointer font-semibold ml-2 focus:ring-4 focus:outline-none">
                  Sign up
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
