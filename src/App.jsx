import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RiMoonFill, RiSunFill } from "react-icons/ri"; // Import icons from react-icons

import JobApp from "./components/JobApp";
import Navbar from "./components/layout/Navbar";
import About from "./components/About";
import Footer from "./components/layout/Footer";

import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Apply dark mode styles based on the darkMode state
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="overflow-x-hidden min-h-dvh">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<JobApp />} />
        </Routes>
        {/* Dark mode toggle button with React Icons */}
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? <RiSunFill /> : <RiMoonFill />}
        </button>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
