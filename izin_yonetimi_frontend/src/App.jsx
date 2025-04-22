import React from "react";
import "./App.css";
import Register from "./components/register";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ChangePasswordPage from "./components/ChangePasswordPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";


const App = () => {
  return (
    <Router>
      <div>
        <HomePage />
        <LoginPage />
<<<<<<< Updated upstream
=======
        <ChangePasswordPage />
>>>>>>> Stashed changes
      </div>
    </Router>

  );
};

export default App;
