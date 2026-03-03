import React from "react";
import bgImage from "../assets/contat.webp";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">

      {/* ================= HERO SECTION ================= */}
      <div
        className="relative h-[50vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300">
I'm always open to new opportunities and collaborations. Whether you have a specific project in mind or just want to chat about technology, feel free to reach out.          </p>
        </div>
      </div>

      {/* ================= CONTACT CONTENT ================= */}
      <div className="bg-[#0f172a] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* ===== LEFT: CONTACT FORM ===== */}
          <div className="bg-[#111827] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Me a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-md font-medium"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* ===== RIGHT: CONTACT INFO ===== */}
          <div className="space-y-8">

            {/* Contact Info Box */}
            <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Information
              </h3>

              <div className="space-y-4 text-gray-300">

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-400" />
                  <span>dewminichalakshana456@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone className="text-blue-400" />
                  <span>+94 70 185 6794</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>Sri Lanka</span>
                </div>

              </div>
            </div>

            {/* Social Links Box */}
            <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Connect on Social
              </h3>

              <div className="space-y-4">

                <a
                  href="https://github.com/dew-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/dewmini-jayasinghe-b9308b31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="flex items-center gap-3 bg-gray-300 p-3 rounded-md hover:bg-gray-600 transition"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}