import React from "react";
import bgImage from "../assets/projects.jpg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.png";

import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Wild Lanka",
      image: project1,
      description:
        "Tourism web application built using React and Tailwind CSS with interactive UI and responsive design.",
      github: "https://github.com/dew-02/project1",
      tech: ["React", "Tailwind CSS", "Node.js"],
    },
    {
      title: "Medico 360",
      image: project2,
      description:
        "Online medical portal designed to manage patient services and appointments with clean dashboard interface.",
      github: "https://github.com/yourusername/project2",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "ReGoods",
      image: project3,
      description:
        "Sustainable product exchange platform focused on eco-friendly trading using modern web technologies.",
      github: "https://github.com/yourusername/project3",
      tech: ["React", "Firebase"],
    },
  ];

  return (
    <section id="projects">

      {/* ================= HERO SECTION ================= */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work, highlighting full-stack development,
            UI design, and modern web technologies.
          </p>
        </div>
      </div>

      {/* ================= PROJECT CARDS ================= */}
      <div className="bg-[#0f172a] py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#111827] rounded-xl overflow-hidden shadow-lg 
                           hover:-translate-y-3 hover:shadow-blue-500/40 
                           transition-all duration-300"
              >

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

                {/* Content */}
                <div className="p-6">

                  {/* Title + Github */}
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Used */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 px-3 py-1 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}