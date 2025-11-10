import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home({ defaultState }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/project");
  };

  const roles = [
    "Full_Stack Developer",
    "Generative_AI Developer",
    "Web Developer",
    "AI Software_Engineer...",
    "Frontend Developer",
    "MERN_Stack Developer",
    "Prompt Engineer",
    "Backend_Developer",
    "PERN_Stack Developer",
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
    <section className="min-h-screen flex items-center justify-center text-white relative px-4 sm:px-6 md:px-10">
      {/* Glow background blob */}
      <div className="absolute top-10 right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-60 md:h-60 bg-blue-500/20 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-60 md:h-60 bg-purple-500/20 blur-[100px] rounded-full animate-pulse"></div>

      <div
        className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 p-6 sm:p-8 lg:p-10 
        max-w-6xl w-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
      >
        {/* Left text */}
        <div className="space-y-5 sm:space-y-6 w-full lg:w-1/2 text-center lg:text-left">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
              defaultState ? "text-white" : "text-black"
            }`}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Sunny Gupta
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            I am a <span className="text-blue-400">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p
            className={`leading-relaxed text-base sm:text-lg ${
              defaultState ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A passionate developer crafting modern web experiences and
            integrating AI into real-world applications.
          </p>

          <button
            onClick={handleNavigate}
            className="px-5 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
            hover:opacity-90 transition rounded-xl shadow-lg text-base sm:text-lg font-medium cursor-pointer"
          >
            Product's
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <div className="relative w-52 sm:w-64 md:w-72 h-auto flex items-center justify-center">
            <img
              src="/profilepic.jpg"
              alt="profile"
              className="w-full h-auto object-cover rounded-lg shadow-xl border border-gray-200 grayscale transition-all duration-700 ease-in-out animate-photoZoom"
            />
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
