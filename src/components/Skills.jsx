import React from "react";
import {
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import bgImage from "../assets/skills.jpg";

const groups = [
  {
    title: "Programming",
    icon: <FaCode />,
    accent: "text-blue-300 bg-blue-500/12",
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    accent: "text-purple-300 bg-purple-500/12",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Figma"],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    accent: "text-green-300 bg-green-500/12",
    skills: ["Node.js", "Express.js", "Java", "PHP", "REST APIs"],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    accent: "text-blue-300 bg-blue-500/12",
    skills: ["MySQL", "SQLite", "MongoDB", "ER Diagrams", "Database Design"],
  },
  {
    title: "Mobile",
    icon: <FaMobileAlt />,
    accent: "text-blue-300 bg-blue-500/12",
    skills: ["Android Studio", "Kotlin", "Java"],
  },
  {
    title: "Engineering Basics",
    icon: <FaTools />,
    accent: "text-purple-300 bg-purple-500/12",
    skills: ["OOP", "Data Structures", "SDLC", "MVC Architecture", "Design Patterns", "Agile"],
  },
  {
    title: "API Testing",
    icon: <SiPostman />,
    accent: "text-green-300 bg-green-500/12",
    skills: ["Postman", "API Documentation", "Request Testing"],
  },
  {
    title: "Version Control",
    icon: <FaGitAlt />,
    accent: "text-blue-300 bg-blue-500/12",
    skills: ["Git", "GitHub", "GitHub Desktop", "Branching", "Pull Requests"],
  },
  {
    title: "Tools & IDEs",
    icon: <FaTools />,
    accent: "text-blue-300 bg-blue-500/12",
    skills: ["VS Code", "Eclipse", "IntelliJ IDEA", "Android Studio", "R Studio", "Arduino IDE"],
  },
];

export default function Skills() {
  return (
    <main>
      <section
        className="page-hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="page-shell max-w-4xl text-center">
          <span className="eyebrow mx-auto">Skills & Technologies</span>
          <h1 className="section-title mt-6">A practical toolkit for building.</h1>
          <p className="section-copy mx-auto mt-6 max-w-3xl">
            A focused overview of the languages, frameworks, tools, and
            development concepts I use while creating responsive web and mobile
            applications.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Technical Stack</span>
              <h2 className="section-title mt-5">What I work with</h2>
            </div>
            <p className="section-copy max-w-xl">
              Balanced across frontend, backend, data, mobile, and collaboration
              so I can understand the full shape of a product.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {groups.map((group) => (
              <article
                key={group.title}
                className="glass-panel rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300/35"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-2xl text-xl ${group.accent}`}
                  >
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-black text-white">{group.title}</h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
