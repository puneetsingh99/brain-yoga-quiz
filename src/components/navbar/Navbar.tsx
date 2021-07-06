import logo from "../../assets/brain-yoga-logo.png";
import React from "react";
import { NavDesktop } from "./NavDesktop";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky z-10 top-0 w-full sm:p-2  sm:px-4 sm:py-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="flex flex-col items-center justify-between sm:flex-row sm:w-4/6 m-auto">
        <div className="text-xl font-logo flex items-center font-semibold cursor-pointer">
          <h1>Brain</h1>
          <img src={logo} alt="brain-yoga-logo" className="w-20" />
          <h1>Yogam</h1>
        </div>
        <NavDesktop />
      </div>
    </header>
  );
};
