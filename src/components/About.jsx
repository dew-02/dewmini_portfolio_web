import { motion as Motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaMapMarkerAlt } from "react-icons/fa";
import uniImg from "../assets/uni.png";
import schoolImg from "../assets/school.jpg";
import openuniImg from "../assets/openuni.png";
import aboutBg from "../assets/abt.jpg";

const education = [
  {
    title: "BSc (Hons) in Information Technology",
    place: "Sri Lanka Institute of Information Technology",
    date: "2023 - Present",
    image: uniImg,
    badge: "Current",
    accent: "cyan",
    details:
      "Studying software engineering, full-stack development, databases, networking, cloud technologies, and cybersecurity.",
    tags: ["Web Development", "Databases", "Programming", "Networking"],
  },
  {
    title: "GCE Advanced Level",
    place: "St. Anthony's Girls' College Kandy",
    date: "2020 - 2022",
    image: schoolImg,
    accent: "rose",
    details:
      "Completed the Physical Science stream, building a strong analytical and mathematical foundation for IT studies.",
    tags: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    title: "Certificate in Information Technology",
    place: "Open University of Sri Lanka",
    date: "2023",
    image: openuniImg,
    accent: "lime",
    details:
      "Gained foundational IT knowledge including computer hardware, operating systems, and office productivity tools.",
    tags: ["MS Word", "MS Excel", "MS PowerPoint", "Hardware"],
  },
];

const accentClasses = {
  cyan: "border-cyan-300/40 text-cyan-200 bg-cyan-300/10",
  rose: "border-rose-300/40 text-rose-200 bg-rose-300/10",
  lime: "border-lime-300/40 text-lime-200 bg-lime-300/10",
};

export default function About() {
  return (
    <main>
      <section
        className="page-hero"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="page-shell max-w-4xl text-center">
          <span className="eyebrow mx-auto">About Me</span>
          <h1 className="section-title mt-6">Curious builder, thoughtful learner.</h1>
          <p className="section-copy mx-auto mt-6 max-w-3xl">
            I am Dewmini Chalakshana, an Information Technology student at
            SLIIT with a love for clean interfaces, practical systems, and
            continuous learning through real projects.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">My Journey</span>
            <h2 className="section-title mt-5">From curiosity to craft.</h2>
            <p className="section-copy mt-6">
              My software journey started with wanting to understand how web
              applications work. Coursework, practice projects, and team
              assignments helped me grow from basic pages into full-stack
              thinking with React, Node.js, databases, and deployment basics.
            </p>
            <p className="section-copy mt-5">
              I am currently seeking internship opportunities where I can learn
              from experienced developers, contribute to useful products, and
              keep improving my engineering habits.
            </p>
          </Motion.div>

          <Motion.div
            className="grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              {
                icon: <FaLaptopCode />,
                title: "Full-Stack",
                copy: "React, Node.js, Express, MongoDB, and REST APIs.",
              },
              {
                icon: <FaGraduationCap />,
                title: "IT Student",
                copy: "Building foundations in software, cloud, and security.",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Sri Lanka",
                copy: "Open to internships, collaboration, and learning.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-panel rounded-3xl p-6 transition hover:-translate-y-1"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/12 text-xl text-cyan-200">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.copy}
                </p>
              </div>
            ))}
          </Motion.div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="page-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Education & Experience</span>
              <h2 className="section-title mt-5">Learning path</h2>
            </div>
            <p className="section-copy max-w-xl">
              A focused mix of academic study, practical projects, and readiness
              for real-world software development work.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="grid gap-5">
              {education.map((item) => (
                <Motion.article
                  key={item.title}
                  className="glass-panel rounded-3xl p-5"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <img
                      src={item.image}
                      alt={item.place}
                      className="h-24 w-24 rounded-2xl border border-white/10 bg-white object-cover p-2"
                    />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-black text-white">
                            {item.title}
                          </h3>
                          <p className="mt-1 font-semibold text-cyan-100/80">
                            {item.place}
                          </p>
                          <p className="mt-1 text-sm text-slate-400">
                            {item.date}
                          </p>
                        </div>
                        {item.badge && (
                          <span className="rounded-full bg-lime-300/12 px-3 py-1 text-xs font-black text-lime-200">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-4 text-sm leading-6 text-slate-300">
                        {item.details}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full border px-3 py-1 text-xs font-bold ${accentClasses[item.accent]}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Motion.article>
              ))}
            </div>

            <Motion.aside
              className="glass-panel rounded-3xl p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="rounded-full bg-cyan-300/12 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
                Actively Seeking
              </span>
              <h3 className="mt-6 text-3xl font-black text-white">
                Internship in full-stack development
              </h3>
              <p className="section-copy mt-5">
                I am ready to support real projects, learn production workflows,
                collaborate with teams, and strengthen my skills in frontend,
                backend, databases, and DevOps foundations.
              </p>
              <a href="#/contact" className="primary-button mt-7">
                Contact Me
              </a>
            </Motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}
