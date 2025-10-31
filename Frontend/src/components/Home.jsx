import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home({ defaultState }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/project");
  };

  const roles = [
    "Web Developer",
    "Full_Stack Developer",
    "Frontend Developer",
    "Backend_Developer",
    "AI-Integrated Software_Engineer...",
    "MERN_Stack Developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[index];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 90);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative">
      {/* Glow background blob */}
      <div className="absolute top-10 right-10 w-60 h-60 bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>

      <div
        className="flex flex-col md:flex-row items-center gap-12 p-10 max-w-5xl w-full 
      bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
      >
        {/* Left text */}
        <div className="space-y-6 md:w-1/2">
          <h1
            className={`text-4xl md:text-6xl font-bold leading-tight ${
              defaultState ? "text-white" : "text-black"
            }`}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Sunny Gupta
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
            I am a <span className="text-blue-400">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p
            className={`leading-relaxed text-lg ${
              defaultState ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A passionate developer crafting modern web experiences and
            integrating AI into real-world applications.
          </p>

          <button
            onClick={handleNavigate}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
            hover:opacity-90 transition rounded-xl shadow-lg text-lg font-medium cursor-pointer"
          >
            Product's
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center cursor-none">
          <div className="relative w-75 h-86 flex items-center justify-center">
            {/* Profile Image */}
            <img
              src="/profilepic.jpg"
              alt="profile"
              className="
        w-72 h-88 object-cover rounded-lg shadow-xl border border-gray-200
        grayscale transition-all duration-700 ease-in-out
        animate-photoZoom
      "
            />

            {/* Animation Styles */}
            <style>{`
      @keyframes photoZoom {
        0% { transform: scale(1); filter: grayscale(100%); }
        50% { transform: scale(1.08); filter: grayscale(0%); }
        100% { transform: scale(1); filter: grayscale(100%); }
      }

     .animate-photoZoom {
        animation: photoZoom 4s ease-in-out infinite;
      }
    `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
