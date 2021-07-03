import React from "react";
import { QuizList } from "./QuizList";
import { Navbar } from "../../components";

export const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="w-11/12 m-auto">
        <QuizList />
      </main>
    </>
  );
};
