import React from "react";

//React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import WelcomePage from "./pages/WelcomePage";
import PremiumPage from "./pages/PremiumPage";
import SignUpPage from "./SignUpPage";
import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route exact path="/premium" element={<PremiumPage />} />
        <Route exact path="/sign_up" element={<SignUpPage />} />
        <Route exact path="/log_in" element={<LogInPage />} />
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
