import React from "react";
import "./index.css";
import "./custom-styles.css";
import { useTheme } from "./hooks";
import { Home } from "./pages";
import { Routes, Route } from "react-router";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme}`}>
      <main className="min-h-screen bg-light-100  dark:bg-gray-900 text-light-800 dark:text-dark-100">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
