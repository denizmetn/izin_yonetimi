import React from "react";
import "./App.css";
import Register from "./components/register";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <HomePage />
<<<<<<< Updated upstream
=======
        <LoginPage />

        <ChangePasswordPage />
>>>>>>> Stashed changes
      </div>
    </Router>
  );
};

export default App;
