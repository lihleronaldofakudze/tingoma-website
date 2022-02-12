import React from "react";

//React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import WelcomePage from "./pages/WelcomePage";
import PremiumPage from "./pages/PremiumPage";
import SignUpPage from "./SignUpPage";
import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";
import ForArtistPage from "./pages/ForArtistPage";
import UploadSinglePage from "./pages/UploadSinglePage";
import UploadAlbumPage from "./pages/UploadAlbumPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route exact path="/premium" element={<PremiumPage />} />
        <Route exact path="/sign_up" element={<SignUpPage />} />
        <Route exact path="/log_in" element={<LogInPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/for_artist" element={<ForArtistPage />} />
        <Route exact path="/upload_single" element={<UploadSinglePage />} />
        <Route exact path="/upload_album" element={<UploadAlbumPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
