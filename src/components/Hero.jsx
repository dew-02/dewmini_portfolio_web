import React from "react";
import { FaArrowRight, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";
import mePhoto from "../assets/me_new.png";

const highlights = [
  { value: "MERN", label: "Stack focus" },
  { value: "8+", label: "Tools explored" },
  { value: "2023", label: "IT journey" },
];

const tech = [
  { icon: <FaReact />, label: "React" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <SiNodedotjs />, label: "Node" },
  { icon: <SiMongodb />, label: "MongoDB" },
];

export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-20">
      <section className="page-shell grid min-h-[calc(100vh-80px)] items-center gap-80 py-18 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <span className="eyebrow">Available for work</span>

          <h1 className="mt-6 max-w-2xl text-[clamp(3rem,6vw,6.9rem)] font-black leading-[0.9] text-white">
            Dewmini <span className="accent-text">Chalakshana</span>
          </h1>

          <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-blue-50/88 md:text-2xl">
            Aspiring full-stack developer crafting clean, responsive, and
            human-friendly digital experiences.
          </p>

          <p className="section-copy mt-5 max-w-2xl">
            I enjoy turning ideas into polished web applications with React,
            Tailwind CSS, Node.js, and thoughtful UI details that make a project
            feel calm, modern, and easy to use.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#/projects" className="primary-button">
              View Projects <FaArrowRight />
            </a>
            <a href="#/contact" className="secondary-button">
              Get In Touch
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <a
              href="https://github.com/dew-02"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/7 text-xl text-white transition hover:border-blue-300 hover:text-blue-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dewmini-jayasinghe-b9308b31a"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/7 text-xl text-white transition hover:border-blue-300 hover:text-blue-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass-panel relative mx-auto max-w-[520px] overflow-hidden rounded-[2rem] p-4">
            
            <div className="aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-blue-100/10">
              <img
                src={mePhoto}
                alt="Dewmini Chalakshana"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center"
                >
                  <p className="text-xl font-black text-white">{item.value}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-5 flex max-w-[520px] flex-wrap justify-center gap-3">
            {tech.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-sm font-bold text-slate-100"
              >
                <span className="text-blue-300">{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
