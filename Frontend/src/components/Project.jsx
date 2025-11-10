import React from "react";

function Project({ defaultState }) {
  const ProjectCard = ({ name, description, link }) => (
    <div
      className="p-5 sm:p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg 
      hover:scale-[1.03] hover:border-blue-400 hover:shadow-blue-400/30 transition duration-300 group"
    >
      <h3
        className={`text-lg sm:text-xl font-semibold mb-2 ${
          defaultState ? "text-white" : "text-black"
        }`}
      >
        {name || "Project Title"}
      </h3>

      <p
        className={`text-sm sm:text-base mb-4 ${
          defaultState ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {description ||
          "This is a short description about your project. Add tech stack & features."}
      </p>

      <a
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 font-medium group-hover:text-purple-400 transition"
      >
        Visit Project →
      </a>
    </div>
  );

  const project_Details = [
    {
      name: "NextGenPrep Website",
      description:
        "A platform to master Interview Prep — DSA, Frontend, Backend, Full Stack (System Design), and Gen AI.",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen text-black px-4 sm:px-8 md:px-20 py-12 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center md:text-left">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Product's
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {project_Details.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Project;
