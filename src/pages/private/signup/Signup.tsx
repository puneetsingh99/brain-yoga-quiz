import { Navbar, NavMobile } from "../../../components";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTE_LOGIN } from "../../../utils/routes";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useSignup } from "./useSignup";

export const Signup = () => {
  const {
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
  } = useSignup();

  const focusInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusInput.current && focusInput.current.focus();
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full sm:w-11/12 m-auto pt-4 px-2 flex justify-center items-center">
        <article className="w-full h-600 sm:w-375 sm:h-575 m-auto py-2 px-2 bg-white dark:bg-gray-800 shadow-md rounded-3xl">
          <div className="flex flex-col justify-center items-center w-full ">
            <h1 className="text-2xl tracking-wider">Sign up</h1>
            <div className="h-2 mb-2">
              <p className="text-sm text-red-500 font-semibold">
                {signupState.status === "error" &&
                  `• ${signupState.error?.message}`}
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) => handleSignup(e)}
            className="flex flex-col justify-between items-center"
          >
            <label className="flex flex-col w-11/12 sm:8/12">
              <p className="mb-2 text-lg">Name</p>
              <input
                type="text"
                value={name}
                onChange={(e) =>
                  signupDispatch({
                    type: "SET_NAME",
                    payload: { name: e.target.value },
                  })
                }
                className={`dark:bg-gray-700 mb-2 px-4 py-3 rounded-lg focus:ring-4 focus:outline-none ring-opacity-60 border border-gray-700
                 ${invalidName && "ring-4 ring-red-500"}
                `}
                ref={focusInput}
              />
              <p className={`text-red-500 text-sm font-semibold`}>{` ${
                invalidName ? `• ${signupValidation.errorMessage}` : ""
              } `}</p>
            </label>

            <label className="flex flex-col w-11/12 sm:8/12">
              <p className="mb-2 text-lg">Username</p>
              <input
                type="text"
                value={username}
                onChange={(e) =>
                  signupDispatch({
                    type: "SET_USERNAME",
                    payload: { username: e.target.value },
                  })
                }
                className={`dark:bg-gray-700 mb-2 px-4 py-3 rounded-lg focus:ring-4 focus:outline-none ring-opacity-60 border border-gray-700
                 ${invalidUsername && "ring-4 ring-red-500"}
                `}
                autoComplete="username"
              />
              <p className={`text-red-500 text-sm font-semibold`}>{` ${
                invalidUsername ? `• ${signupValidation.errorMessage}` : ""
              } `}</p>
            </label>

            <label className="flex flex-col w-11/12 sm:8/12 relative">
              <p className="mb-2 text-lg">Password</p>
              <input
                type={`${signupValidation.showPassword ? "text" : "password"}`}
                value={password}
                onChange={(e) =>
                  signupDispatch({
                    type: "SET_PASSWORD",
                    payload: { password: e.target.value },
                  })
                }
                className={`dark:bg-gray-700 mb-2 px-4 py-3 rounded-lg focus:ring-4 focus:outline-none ring-opacity-60 border border-gray-700
                 ${invalidUsername && "ring-4 ring-red-500"}
                `}
                autoComplete="current-password"
              />
              <i
                className="absolute ml-auto mr-2 z-20 w-max eye eye-password"
                onClick={(e) => {
                  setSignupValidation((currState) => ({
                    ...currState,
                    showPassword: !currState.showPassword,
                  }));
                  e.stopPropagation();
                }}
              >
                {signupValidation.showPassword ? (
                  <AiFillEye size={20} />
                ) : (
                  <AiFillEyeInvisible size={20} />
                )}
              </i>
              <p className={`text-red-500 text-sm font-semibold`}>{` ${
                invalidPassword ? `• ${signupValidation.errorMessage}` : ""
              } `}</p>
            </label>

            <label className="flex flex-col w-11/12 sm:8/12 relative">
              <p className="mb-2 text-lg">Confirm Password</p>
              <input
                type={`${
                  signupValidation.showConfirmPassword ? "text" : "password"
                }`}
                value={confirmPassword}
                onChange={(e) =>
                  signupDispatch({
                    type: "SET_CONFIRM_PASSWORD",
                    payload: { confirmPassword: e.target.value },
                  })
                }
                className={`dark:bg-gray-700 mb-2 px-4 py-3 rounded-lg focus:ring-4 ring-opacity-60 focus:outline-none border border-gray-700 ${
                  invalidConfirmPassword && "ring-4 ring-red-500"
                }`}
              />
              <i
                className="absolute ml-auto mr-2 z-20 w-max eye"
                onClick={(e) => {
                  setSignupValidation((currState) => ({
                    ...currState,
                    showConfirmPassword: !currState.showConfirmPassword,
                  }));
                  e.stopPropagation();
                }}
              >
                {signupValidation.showConfirmPassword ? (
                  <AiFillEye size={20} />
                ) : (
                  <AiFillEyeInvisible size={20} />
                )}
              </i>
              <div className="h-5">
                <p className={`text-red-500 text-sm font-semibold`}>{` ${
                  invalidConfirmPassword
                    ? `• ${signupValidation.errorMessage}`
                    : ""
                } `}</p>
              </div>
            </label>

            <input
              type="submit"
              value={`${
                signupState.status === "signing in" ? "Signing in..." : "Signup"
              }`}
              disabled={signupState.status === "signing in" ? true : false}
              className={`text-white mt-1 px-4 py-3 m-auto w-11/12 rounded-lg gradient-bg cursor-pointer mb-4 focus:ring-4 focus:outline-none focus:ring-opacity-50 font-semibold`}
            />
            <p className="text-lg">
              Already have an account?
              <Link to={ROUTE_LOGIN}>
                <span className="cursor-pointer font-semibold ml-2 focus:ring-4 focus:outline-none">
                  Login
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
