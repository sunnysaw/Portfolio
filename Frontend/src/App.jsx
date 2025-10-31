import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Project from "./components/Project.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [defaultState, setDefaultState] = useState(true);

  const handleOnclick = () => {
    setDefaultState(!defaultState);
  };

  return (
    <div
      className={`relative min-h-screen flex transition-colors duration-500 ${
        defaultState
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
          : "bg-white"
      }`}
    >
      {/* Dark/Light Mode Toggle */}
      <div className="fixed top-3 right-3 z-50">
        {defaultState ? (
          <div
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white py-2 px-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition"
            onClick={handleOnclick}
          >
            <span className="text-sm font-semibold">Light</span>
            <img src="/sun.svg" alt="light mode" className="w-5" />
          </div>
        ) : (
          <div
            className="flex items-center gap-2 bg-black/10 backdrop-blur-md border border-gray-300 text-black py-2 px-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition"
            onClick={handleOnclick}
          >
            <span className="text-sm font-semibold">Dark</span>
            <img src="/moon.svg" alt="dark mode" className="w-5" />
          </div>
        )}
      </div>

      {/* Left Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="ml-20 w-full">
        <Routes>
          <Route path="/" element={<Home defaultState={defaultState} />} />
          <Route
            path="/project"
            element={<Project defaultState={defaultState} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
