import { motion } from "framer-motion";
import uniImg from "../assets/uni.png";
import schoolImg from "../assets/school.jpg";
import companyImg from "../assets/openuni.png";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= ABOUT ME ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <h2 className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            An aspiring Full-Stack Developer passionate
            about building scalable, clean, and modern web applications.
            I enjoy transforming ideas into efficient and user-friendly solutions.
          </h2>

          <br />

          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm <span className="text-blue-400 font-semibold">Dewmini Chalakshana</span>, a{" "}
            <span className="text-blue-400 font-semibold">BSc in Information Technology student</span> at SLIIT passionate about creating elegant solutions and building modern web applications while continuously growing my skills.
          </p>
        </motion.div>

        {/* ================= MY JOURNEY ================= */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-purple-400">
            My Journey
          </h2>

          {/* 🔵 BOX ADDED HERE */}
          <div className="bg-[#111827] border border-blue-500/20 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto hover:shadow-blue-500/30 transition-all duration-300">

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Hello! I'm Dewmini Chalakshana, also known as MrRandiv in the developer community. I'm a{" "}
                <span className="text-blue-400 font-semibold">
                  BSc in Information Technology student
                </span>{" "}
                at Sri Lanka Institute of Information Technology (SLIIT), passionate about full-stack web development and DevOps practices.
              </p>

              <p>
                My journey into software development started with curiosity about how web applications work. Through coursework and hands-on projects, I've built over{" "}
                <span className="text-blue-400 font-semibold">
                  10 functional web applications
                </span>
                , ranging from e-commerce platforms to real-time collaboration tools. Each project has been a learning opportunity that has shaped my understanding of modern development practices.
              </p>

              <p>
                I specialize in the{" "}
                <span className="text-blue-400 font-semibold">
                  MERN stack
                </span>{" "}
                (MongoDB, Express.js, React.js, Node.js) and am actively exploring{" "}
                <span className="text-blue-400 font-semibold">
                  DevOps tools and methodologies
                </span>{" "}
                including Docker, CI/CD pipelines, and deployment automation. I believe in writing clean, maintainable code and following industry best practices.
              </p>

              <p>
                I'm eager to apply my knowledge in professional settings, contribute to real-world projects, and continue growing as a developer. I stay up-to-date with emerging technologies through online courses, documentation, and hands-on experimentation.
              </p>

              <p>
                Outside of coding, I explore new frameworks, contribute to open-source when possible, and collaborate on exciting opportunities. I'm currently seeking{" "}
                <span className="text-blue-400 font-semibold">
                  internship opportunities
                </span>{" "}
                where I can learn from experienced developers and contribute to meaningful projects.
              </p>
            </div>

          </div>
        </motion.div>

        {/* ================= EDUCATION & EXPERIENCE ================= */}
        {/* (UNCHANGED — Your Existing Code Below) */}

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            Education & Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE - EDUCATION */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Education
              </h3>

              <div className="bg-[#111827] border-l-4 border-blue-500 rounded-xl p-6 shadow-lg relative 
                              hover:shadow-blue-500/40 hover:-translate-y-2 
                              transition-all duration-300 cursor-pointer mb-8">

                <span className="absolute top-6 right-6 bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full">
                  Current
                </span>

                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white">
                    <img src={uniImg} alt="University" className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      BSc (Hons) in Information Technology
                    </h4>
                    <p className="text-blue-400 text-sm">
                      Sri Lanka Institute of Information Technology
                    </p>
                    <p className="text-gray-400 text-xs">2023 - Present</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mt-4">
                  Studying software engineering, full-stack development,
                  databases, networking, cloud technologies, and cybersecurity.
                </p>
              </div>

              <div className="bg-[#111827] border-l-4 border-purple-500 rounded-xl p-6 shadow-lg 
                              hover:shadow-purple-500/40 hover:-translate-y-2 
                              transition-all duration-300 cursor-pointer">

                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white">
                    <img src={schoolImg} alt="School" className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <h4 className="font-semibold">GCE Advanced Level</h4>
                    <p className="text-purple-400 text-sm">
                      Your School Name
                    </p>
                    <p className="text-gray-400 text-xs">2020 - 2022</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mt-4">
                  Completed Advanced Level with strong focus on Mathematics and IT.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - EXPERIENCE */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-400">
                Experience
              </h3>

              <div className="bg-[#111827] border-l-4 border-green-500 rounded-xl p-6 shadow-lg relative 
                              hover:shadow-green-500/40 hover:-translate-y-2 
                              transition-all duration-300 cursor-pointer">

                <span className="absolute top-6 right-6 bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full">
                  Current
                </span>

                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white">
                    <img src={companyImg} alt="Company" className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Intern Full-Stack Developer
                    </h4>
                    <p className="text-green-400 text-sm">
                      Pixel Clear (Pvt) Ltd
                    </p>
                    <p className="text-gray-400 text-xs">Present</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mt-4">
                  Developing and maintaining full-stack web applications.
                  Working with WordPress, MySQL databases, and deploying systems.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-md">
                    WordPress
                  </span>
                  <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-md">
                    PHP
                  </span>
                  <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-md">
                    MySQL
                  </span>
                  <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-md">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}