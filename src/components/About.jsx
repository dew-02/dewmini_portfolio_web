import { motion } from "framer-motion";
import uniImg from "../assets/uni.png";
import schoolImg from "../assets/school.jpg";
import companyImg from "../assets/openuni.png"; // your internship logo

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

          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I’m Dewmini Jayasinghe, an aspiring Full-Stack Developer passionate
            about building scalable, clean, and modern web applications.
            I enjoy transforming ideas into efficient and user-friendly solutions.
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

          <div className="space-y-6 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <p>
              My journey into technology began with curiosity about how systems
              and websites work. That curiosity became passion as I started building
              real-world projects and improving my technical skills.
            </p>

            <p>
              Through university and self-learning, I have strengthened my
              foundation in software engineering, databases, networking,
              and cloud technologies.
            </p>

            <p>
              My goal is to become a skilled software engineer who builds
              scalable systems with clean architecture and efficient deployment workflows.
            </p>
          </div>
        </motion.div>

        {/* ================= EDUCATION & EXPERIENCE ================= */}
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

            {/* ================= LEFT SIDE - EDUCATION ================= */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Education
              </h3>

              {/* University Card */}
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

              {/* School Card */}
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

            {/* ================= RIGHT SIDE - EXPERIENCE ================= */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-400">
                Experience
              </h3>

              {/* Internship Card */}
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