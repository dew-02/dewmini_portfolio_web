import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#020617]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
           

            <h1 className="text-5xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-4 leading-tight">
              Hi! I’m <span className="text-accent">Dewmini</span>
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-500 mb-8 h-[1.2em]">
  Aspiring Web Developer
</h2>


            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              I create modern, responsive websites using React & Tailwind CSS. I love building projects that solve real problems.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-10 py-4 bg-accent hover:bg-accent/90 text-white text-xs font-black tracking-widest rounded-full transition-all shadow-xl shadow-accent/20 hover:scale-105 active:scale-95"
              >
                GET IN TOUCH
              </a>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/dew-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-blue-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/dewmini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Hero image / floating circles */}
          <div className="flex-1 relative">
            <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] mx-auto flex items-center justify-center">
              <div className="absolute inset-0 border-[1px] border-accent/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-[10%] border-[2px] border-dashed border-white/5 rounded-full animate-reverse-spin"></div>
              <div className="absolute inset-[10%] border-[1px] border-accent/10 rounded-full"></div>
              <div className="absolute top-10 -left-5 w-16 h-16 bg-gradient-to-br from-gray-700 to-black rounded-full shadow-2xl animate-float-slow"></div>
              <div className="absolute bottom-20 -right-10 w-24 h-24 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-2xl animate-float-slow"></div>
              <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.2)] flex items-center justify-center bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent opacity-50"></div>
                <img
                  src="src/assets/me.jpeg" // replace with your photo
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
