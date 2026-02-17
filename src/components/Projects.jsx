import React from "react";

export default function Projects() {
  const projects = [
    { title: "Project One", description: "Description for project one", link: "#" },
    { title: "Project Two", description: "Description for project two", link: "#" },
    { title: "Project Three", description: "Description for project three", link: "#" },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
