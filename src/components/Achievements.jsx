import React from "react";
import bgImage from "../assets/achievement-bg.jpg";

import cert1 from "../assets/certificate1.jpg";
import cert2 from "../assets/certificate2.jpg";
import cert3 from "../assets/certificate3.jpg";

const certificates = [
  {
    title: "Python for Beginners",
    organization:
      "Centre for Open & Distance Learning (CODL), University of Moratuwa",
    date: "June 2026",
    image: cert3,
    description:
      "Successfully completed the Python for Beginners programme conducted by the Department of Computer Science & Engineering, University of Moratuwa. The course introduced Python programming fundamentals, problem-solving techniques, and basic application development.",
    skills: [
      "Python",
      "Programming Fundamentals",
      "Problem Solving",
      "Algorithms",
    ],
  },
  {
    title: "AI/ML Engineer – Stage 1",
    organization: "SLIIT Centre for Open and Distance Education",
    date: "June 2026",
    image: cert2,
    description:
      "Completed the AI/ML Engineer – Stage 1 programme, gaining an introduction to Artificial Intelligence, Machine Learning concepts, data preprocessing, model development, and the fundamentals of AI-driven technologies.",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Preprocessing",
      "AI Fundamentals",
    ],
  },
  {
    title: "Getting Started with MongoDB Atlas",
    organization: "MongoDB",
    date: "May 2026",
    image: cert1,
    description:
      "Successfully completed the MongoDB Atlas learning programme, gaining hands-on experience with cloud database deployment, cluster management, database connectivity, and NoSQL database fundamentals using MongoDB Atlas.",
    skills: ["MongoDB Atlas", "NoSQL", "Cloud Database", "Database Management"],
  },
];

export default function Achievements() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="page-hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="page-shell max-w-4xl text-center">
          <span className="eyebrow mx-auto">Professional Growth</span>

          <h1 className="section-title mt-6">
            Achievements & Certifications
          </h1>

          <p className="section-copy mx-auto mt-6 max-w-3xl">
            A collection of certifications, achievements, and continuous
            learning experiences that demonstrate my commitment to improving my
            technical knowledge and professional skills.
          </p>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="section-pad">
        <div className="page-shell">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => (
              <article
                key={index}
                className="glass-panel group overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/35"
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* BOTTOM CLICK TO VIEW */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition">
                    <button
                      onClick={() => window.open(cert.image, "_blank")}
                      className="w-full text-left px-4 py-3 text-sm font-semibold text-white/90 hover:text-white transition"
                    >
                      Click to View →
                    </button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h2 className="text-2xl font-black text-white">
                    {cert.title}
                  </h2>

                  <p className="mt-2 text-blue-300 font-semibold">
                    {cert.organization}
                  </p>

                  <p className="text-xs text-slate-400 mt-1">{cert.date}</p>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {cert.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}