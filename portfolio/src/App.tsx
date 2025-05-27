import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import Contact from "./screens/Contact";
import AboutMe from "./screens/AboutMe";
import Skills from "./screens/Skills";
import useTheme from "./hooks/useTheme";



function App() {
  const [theme, setTheme] = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleChange = (value) => {
    setTheme(value);
    setShowDropdown(false);
  };
  return (
    <Router>
     <div className="min-h-screen dark:bg-gray-900 relative">
        {/* Tiny Theme Toggle Icon */}
        <div className="absolute top-4 right-4 z-50">
  <button
    onClick={() => setShowDropdown(!showDropdown)}
    className="text-xl bg-white dark:bg-gray-800 dark:text-white rounded-full p-2 shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    aria-label="Toggle Theme Dropdown"
  >
    {theme === "dark" ? "🌙" : "☀️"}
  </button>

  {showDropdown && (
    <div className="mt-2 absolute right-0 bg-white dark:bg-gray-800 border rounded shadow w-28 text-sm">
      <button
        onClick={() => handleChange("light")}
        className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        ☀️ Light
      </button>
      <button
        onClick={() => handleChange("dark")}
        className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        🌙 Dark
      </button>
    </div>
  )}
</div>


        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
  </Router>
  
  );
}

export default App;
