import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AppPage from "./pages/AppPage";
import NavbarContainer from "./container/NavbarContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
      <button
        data-toggle="back-to-top"
        className="fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center"
        onClick={handleBackToTop}>
        <i className="fa-solid fa-arrow-up text-base"></i>
      </button>
      <Footer />
    </div>
  );
}

export default App;
