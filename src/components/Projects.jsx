import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Re-Good – Online Resale Platform",
      description:
        "Full-stack MERN web application for buying and selling used products with price negotiation and secure payments.",
      github: "https://github.com/dew-02/Suhuru-Waga-System.git",
      live: "#",
    },
    {
      title: "Agro Management System",
      description:
        "Web platform built using MERN stack to manage sustainable agriculture activities with user-friendly dashboards.",
      github: "https://github.com/dew-02/online-medical-portal.git",
      live: "#",
    },
    {
      title: "Wellness Tracker App",
      description:
        "Mobile app developed in Kotlin to track daily habits, health activities, and personal wellness goals.",
      github: "https://github.com/dew-02/wellness-tracker-app.git",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {project.description}
              </p>

              <div className="flex justify-between">
                <a
                  href={project.github}
                  className="text-blue-600 font-medium hover:underline"
                  target="_blank"
                >
                  GitHub →
                </a>

                <a
                  href={project.live}
                  className="text-green-600 font-medium hover:underline"
                  target="_blank"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
