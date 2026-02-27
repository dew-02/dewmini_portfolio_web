import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import mePhoto from "../assets/me.jpeg"; // IMPORTANT: correct import

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-20 flex items-center overflow-hidden bg-[#020617]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">

            <h1 className="text-5xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-4 leading-tight">
              Hi !  I’m <span className="text-accent">Dewmini Jayasinghe</span>
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-500 mb-6">
              Aspiring Web Developer
            </h2>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              An aspiring Full-Stack Developer dedicated to creating scalable web
              applications, writing clean code, and continuously improving through
              real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              
              {/* Contact Button */}
              <a
             href="#contact"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black tracking-widest rounded-full transition-all shadow-lg hover:scale-105 active:scale-95"
              >
            GET IN TOUCH
            </a>
                
                
              

              {/* Social Icons */}
              <div className="flex items-center gap-4">

                <a
                  href="https://github.com/dew-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/dewmini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-gray-400 hover:text-blue-400 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin size={20} />
                </a>

              </div>
            </div>
          </div>
        
              {/* Hero image / floating circles */}
          <div className="flex-1 relative">
            <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] mx-auto flex items-center justify-center">
              {/* Smaller dark circles */}
              <div className="absolute inset-0 border-[1px] border-black/50 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-[20%] border-[2px] border-dashed border-black/30 rounded-full animate-reverse-spin"></div>

              {/* Hero image */}
              <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.2)] flex items-center justify-center bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent opacity-50"></div>
                <img
                  src={mePhoto}
                  alt="Dewmini"
                  className="object-cover transition-transform duration-1000 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

                  

    </section>
  );
}