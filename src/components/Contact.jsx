import React from "react";
import bgImage from "../assets/contat.webp";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">

      {/* ================= HERO SECTION ================= */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
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
            I'm always open to new opportunities and collaborations.
            Whether you have a specific project in mind or just want to chat about technology,
            feel free to reach out.
          </p>
        </div>
      </div>

      {/* ================= CONTACT CONTENT ================= */}
      <div className="bg-[#0f172a] py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-10">

          {/* Contact Information Box */}
          <div className="bg-[#111827] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-gray-300">

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
          <div className="bg-[#111827] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Connect on Social
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">

 {/* GitHub */}
    <a
      href="https://github.com/dew-02"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg 
                 hover:bg-gray-500 transition"
    >
      <FaGithub className="text-white text-xl" />
      <div>
        <p className="text-white font-medium">GitHub</p>
        <p className="text-sm text-blue-200">@dew-02</p>
      </div>
    </a>

{/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/dewmini-jayasinghe-b9308b31a"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg 
                 hover:bg-gray-500 transition"
    >
      <FaLinkedin className="text-white text-xl" />
      <div>
        <p className="text-white font-medium">LinkedIn</p>
        <p className="text-sm text-blue-200">Dewmini Jayasinghe</p>
      </div>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/dew0._2?igsh=eWM4N3VmODBnYXZn"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg 
                 hover:bg-gray-500 transition"
    >
      <FaInstagram className="text-white text-xl" />
      <div>
        <p className="text-white font-medium">Instagram</p>
        <p className="text-sm text-blue-200">@dew._2</p>
      </div>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/1Pc6MJx58s/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg 
                 hover:bg-gray-500 transition"
    >
      <FaFacebook className="text-white text-xl" />
      <div>
        <p className="text-white font-medium">Facebook</p>
        <p className="text-sm text-blue-200">Dewmini Chalakshana</p>
      </div>
    </a>


            </div>
          </div>

          {/* Start Conversation Button */}
          <div className="flex justify-center pt-6">
            <a
              href="mailto:dewminichalakshana456@gmail.com"
              className="bg-blue-600 text-black px-8 py-3 rounded-full 
                         font-medium hover:bg-blue-700 transition"
            >
              Start Conversation
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}