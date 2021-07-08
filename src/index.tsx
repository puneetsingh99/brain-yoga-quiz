import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, QuizListProvider, AuthProvider } from "./contexts";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <QuizListProvider>
            <App />
          </QuizListProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
