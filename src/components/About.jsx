import { motion } from "framer-motion";
import uniImg from "../assets/uni.png";
import schoolImg from "../assets/school.jpg";
import openuniImg from "../assets/openuni.png";
import aboutBg from "../assets/abt.jpg";

export default function About() {
  return (
    <>
      {/* ================= ABOUT ME ================= */}
      <section
        id="about"
        className="relative py-24 min-h-[60px] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0f172a]/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            An aspiring Full-Stack Developer passionate about building scalable,
            clean, and modern web applications. I enjoy transforming ideas into
            efficient and user-friendly solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed"
          >
            I'm <span className="text-blue-400 font-semibold">Dewmini Chalakshana</span>, a{" "}
            <span className="text-blue-400 font-semibold">BSc in Information Technology student</span>{" "}
            at SLIIT, passionate about creating elegant solutions and building modern web applications while continuously growing my skills.
          </motion.p>
        </div>
      </section>

      {/* ================= MY JOURNEY ================= */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-purple-400">My Journey</h2>

            <div className="bg-[#111827] border border-blue-500/20 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto hover:shadow-blue-500/30 transition-all duration-300">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm Dewmini Chalakshana, a{" "}
                  <span className="text-blue-400 font-semibold">BSc in Information Technology student</span>{" "}
                  at Sri Lanka Institute of Information Technology (SLIIT), passionate about full-stack web development and DevOps practices.
                </p>
                <p>
                  My journey into software development started with curiosity about how web applications work. Through coursework and hands-on projects, I've built several functional web applications across different domains, each strengthening my problem-solving and development skills, ranging from e-commerce platforms to real-time collaboration tools.
                </p>
                <p>
                  I specialize in the{" "}
                  <span className="text-blue-400 font-semibold">MERN stack</span>{" "}
                  (MongoDB, Express.js, React.js, Node.js) and am actively exploring{" "}
                  <span className="text-blue-400 font-semibold">DevOps tools and methodologies</span>{" "}
                  including Docker, CI/CD pipelines, and deployment automation.
                </p>
                <p>
                  I'm eager to apply my knowledge in professional settings, contribute to real-world projects, and continue growing as a developer.
                </p>
                <p>
                  I'm currently seeking{" "}
                  <span className="text-blue-400 font-semibold">internship opportunities</span>{" "}
                  where I can learn from experienced developers and contribute to meaningful projects.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= EDUCATION & EXPERIENCE ================= */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">Education & Experience</h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* LEFT SIDE - EDUCATION */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Education</h3>

                {/* University */}
                <div className="bg-[#111827] border-l-4 border-blue-500 rounded-xl p-6 shadow-lg relative hover:shadow-blue-500/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer mb-8">
                  <span className="absolute top-6 right-6 bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full">Current</span>

                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-white">
                      <img src={uniImg} alt="University" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">BSc (Hons) in Information Technology</h4>
                      <p className="text-blue-400 text-sm">Sri Lanka Institute of Information Technology</p>
                      <p className="text-gray-400 text-xs">2023 - Present</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mt-4">
                    Studying software engineering, full-stack development, databases, networking, cloud technologies, and cybersecurity.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-green-500/10 text-blue-400 text-xs px-3 py-1 rounded-md">Web Development</span>
                    <span className="bg-green-500/10 text-blue-400 text-xs px-3 py-1 rounded-md">Databases</span>
                    <span className="bg-green-500/10 text-blue-400 text-xs px-3 py-1 rounded-md">Programming</span>
                    <span className="bg-green-500/10 text-blue-400 text-xs px-3 py-1 rounded-md">Networking</span>
                  </div>
                </div>

                {/* School */}
                <div className="bg-[#111827] border-l-4 border-purple-500 rounded-xl p-6 shadow-lg hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer mb-8">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-white">
                      <img src={schoolImg} alt="School" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">GCE Advanced Level</h4>
                      <p className="text-purple-400 text-sm">St.Anthony's Girls' College Kandy</p>
                      <p className="text-gray-400 text-xs">2020 - 2022</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mt-4">
                    Completed GCE Advanced Level in the Physical Science stream, building a strong analytical and mathematical foundation that supports my IT studies.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-green-500/10 text-purple-400 text-xs px-3 py-1 rounded-md">Mathematics</span>
                    <span className="bg-green-500/10 text-purple-400 text-xs px-3 py-1 rounded-md">Physics</span>
                    <span className="bg-green-500/10 text-purple-400 text-xs px-3 py-1 rounded-md">Chemistry</span>
                  </div>
                </div>

                {/* Open University */}
                <div className="bg-[#111827] border-l-4 border-yellow-500 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-white">
                      <img src={openuniImg} alt="Open University" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Certificate in Information Technology</h4>
                      <p className="text-yellow-400 text-sm">Open University of Sri Lanka</p>
                      <p className="text-gray-400 text-xs">2023</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mt-4">
                    Gained foundational knowledge in IT including computer hardware, operating systems, and MS Office applications.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-yellow-500/10 text-yellow-400 text-xs px-3 py-1 rounded-md">MS Word</span>
                    <span className="bg-yellow-500/10 text-yellow-400 text-xs px-3 py-1 rounded-md">MS Excel</span>
                    <span className="bg-yellow-500/10 text-yellow-400 text-xs px-3 py-1 rounded-md">MS PowerPoint</span>
                    <span className="bg-yellow-500/10 text-yellow-400 text-xs px-3 py-1 rounded-md">Computer Hardware</span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - EXPERIENCE */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-400">Experience</h3>

                <div className="bg-[#111827] border-l-4 border-green-500 rounded-xl p-6 shadow-lg relative hover:shadow-green-500/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <span className="absolute top-6 right-6 bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full">Actively Seeking</span>
                  <h4 className="font-semibold">Internship Seeker – Full-Stack Development</h4>
                  <p className="text-gray-300 text-sm mt-4">
                    Embarking on my first professional internship, applying academic knowledge to real-world projects, collaborating with industry experts, and gaining hands-on experience in full-stack software development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}