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
    accent: "blue",
    details:
      "Studying software engineering, full-stack development, databases, networking, cloud technologies, and cybersecurity while building practical web applications through coursework and projects.",
    tags: ["Web Development", "Databases", "Programming", "Networking"],
  },
  {
    title: "GCE Advanced Level",
    place: "St. Anthony's Girls' College Kandy",
    date: "2020 - 2022",
    image: schoolImg,
    accent: "purple",
    details:
      "Completed the Physical Science stream, building a strong analytical and mathematical foundation for IT studies.",
    tags: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    title: "Certificate in Information Technology",
    place: "Open University of Sri Lanka",
    date: "2023",
    image: openuniImg,
    accent: "yellow",
    details:
      "Gained foundational knowledge in IT including computer hardware, operating systems, and MS Office applications.",
    tags: ["MS Word", "MS Excel", "MS PowerPoint", "Hardware"],
  },
];

const accentClasses = {
  blue: "border-blue-400/40 text-blue-300 bg-blue-500/10",
  purple: "border-purple-400/40 text-purple-300 bg-purple-500/10",
  yellow: "border-yellow-400/40 text-yellow-300 bg-yellow-500/10",
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
            I am Dewmini Chalakshana, a BSc in Information Technology student
            at SLIIT, passionate about creating elegant solutions and building
            modern web applications while continuously growing my skills.
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
              Hello! I'm Dewmini Chalakshana, a BSc in Information Technology
              student at Sri Lanka Institute of Information Technology (SLIIT),
              passionate about full-stack web development and DevOps practices.
            </p>
            <p className="section-copy mt-5">
              My journey into software development started with curiosity about
              how web applications work. Through coursework and hands-on
              projects, I've built several functional web applications across
              different domains, each strengthening my problem-solving and
              development skills, ranging from e-commerce platforms to real-time
              collaboration tools.
            </p>
            <p className="section-copy mt-5">
              I specialize in the MERN stack (MongoDB, Express.js, React.js,
              Node.js) and am actively exploring DevOps tools and methodologies
              including Docker, CI/CD pipelines, and deployment automation.
            </p>
            <p className="section-copy mt-5">
              I'm eager to apply my knowledge in professional settings,
              contribute to real-world projects, and continue growing as a
              developer. I am currently seeking internship opportunities where I
              can learn from experienced developers and contribute to meaningful
              projects.
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
                copy: "MERN stack, REST APIs, clean UI, and scalable web apps.",
              },
              {
                icon: <FaGraduationCap />,
                title: "IT Student",
                copy: "Studying at SLIIT with focus on software and web systems.",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Sri Lanka",
                copy: "Open to internships, collaboration, and real-world projects.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-panel rounded-3xl p-6 transition hover:-translate-y-1"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/12 text-xl text-blue-300">
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
                          <p className="mt-1 font-semibold text-blue-100/80">
                            {item.place}
                          </p>
                          <p className="mt-1 text-sm text-slate-400">
                            {item.date}
                          </p>
                        </div>
                        {item.badge && (
                          <span className="rounded-full bg-green-500/12 px-3 py-1 text-xs font-black text-green-300">
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
              <span className="rounded-full bg-blue-500/12 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-100">
                Actively Seeking
              </span>
              <h3 className="mt-6 text-3xl font-black text-white">
                Internship in full-stack development
              </h3>
              <p className="section-copy mt-5">
                Embarking on my first professional internship, I am ready to
                apply academic knowledge to real-world projects, collaborate
                with industry experts, and gain hands-on experience in
                full-stack software development.
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
