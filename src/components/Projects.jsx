import React from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import bgImage from "../assets/projects.jpg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpg";

const projects = [
  {
    title: "Crop Management System",
    image: project1,
    description:
      "A responsive web application for agricultural product workflows with clean screens, reusable UI pieces, and practical project structure.",
    github: "https://github.com/dew-02/Suhuru-Waga-System.git",
    tech: ["JavaScript", "CSS", "HTML"],
    type: "Web App",
  },
  {
    title: "Online Medical Portal",
    image: project2,
    description:
      "A medical service portal for managing appointments and patient-facing workflows through a focused dashboard interface.",
    github: "https://github.com/dew-02/online-medical-portal.git",
    tech: ["PHP", "CSS", "JavaScript"],
    type: "Portal",
  },
  {
    title: "Wellness Tracker",
    image: project3,
    description:
      "A Kotlin mobile app for tracking wellness habits, daily health activities, and personal progress goals.",
    github: "https://github.com/dew-02/wellness-tracker-app.git",
    tech: ["Kotlin", "Android"],
    type: "Mobile",
  },
  {
    title: "Learn Languages",
    image: project4,
    description:
      "A mobile learning app concept designed to support language practice with simple flows and approachable screens.",
    github: "https://github.com/dew-02/learn-languages-app-mad_lab_exam_2.git",
    tech: ["Kotlin", "Android"],
    type: "Mobile",
  },
];

export default function Projects() {
  return (
    <main>
      <section
        className="page-hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="page-shell max-w-4xl text-center">
          <span className="eyebrow mx-auto">Selected Work</span>
          <h1 className="section-title mt-6">Projects with purpose and polish.</h1>
          <p className="section-copy mx-auto mt-6 max-w-3xl">
            A collection of web and mobile projects showing UI design,
            application structure, and practical development across different
            domains.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="glass-panel group overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/35"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#0f172a]/75 px-3 py-1 text-xs font-black text-blue-100 backdrop-blur">
                    {project.type}
                  </span>
                  <span className="absolute bottom-5 left-5 text-sm font-black text-white/70">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-2xl font-black text-white">
                      {project.title}
                    </h2>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:border-blue-300 hover:text-blue-300"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <FaGithub />
                    </a>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black text-blue-300 transition hover:text-purple-300"
                  >
                    Explore repository <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
