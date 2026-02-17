import React from "react";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "VS Code"];

  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-white rounded shadow hover:bg-blue-50 transition">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
