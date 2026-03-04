import React from "react";
import bgImage from "../assets/skills.jpg";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "VS Code",
  ];

  return (
    <section id="skills">

      {/* ================= HERO INTRO SECTION ================= */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h1>
          <p className="text-gray-250">
        
                     
                     
<p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
  A comprehensive overview of my technical skills and expertise.
</p>

            <br></br>
I specialize in building modern, scalable web applications using cutting-edge technologies.
 From frontend frameworks to backend services, databases to deployment tools, here's what I work with.        
   </p>
        </div>
      </div>

      {/* ================= SKILLS CONTENT SECTION ================= */}
<div className="bg-[#0f172a] py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h3 className="text-3xl font-bold text-center text-white mb-14">
      My Technical Skills
    </h3>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Programming Languages */}
      <div className="bg-[#111827] p-6 rounded-xl shadow-lg 
                      hover:shadow-blue-500/40 hover:-translate-y-2 
                      transition-all duration-300">
        <h4 className="text-xl font-semibold text-blue-400 mb-4">
          Programming Languages
        </h4>

        <div className="flex flex-wrap gap-3">
          {["C","C++","Java", "Python"].map((skill, index) => (
            <span key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Frontend */}
      <div className="bg-[#111827] p-6 rounded-xl shadow-lg 
                      hover:shadow-purple-500/40 hover:-translate-y-2 
                      transition-all duration-300">
        <h4 className="text-xl font-semibold text-purple-400 mb-4">
          Frontend
        </h4>

        <div className="flex flex-wrap gap-3">
          {["HTML5", "CSS3", "React.js", "Tailwind CSS","JavaScript","Bootstrap","Figma(UI/UX Design)"].map((skill, index) => (
            <span key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="bg-[#111827] p-6 rounded-xl shadow-lg 
                      hover:shadow-green-500/40 hover:-translate-y-2 
                      transition-all duration-300">
        <h4 className="text-xl font-semibold text-green-400 mb-4">
          Backend
        </h4>

        <div className="flex flex-wrap gap-3">
          {["Node.js","Express.js","Java","PHP","API"].map((skill, index) => (
            <span key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

{/* Database*/}
      <div className="bg-[#111827] p-6 rounded-xl shadow-lg 
                      hover:shadow-purple-500/40 hover:-translate-y-2 
                      transition-all duration-300">
        <h4 className="text-xl font-semibold text-purple-400 mb-4">
          Database
        </h4>

        <div className="flex flex-wrap gap-3">
          {["MySQL","SQLite","MongoDB","Database Design(ER Diagrams)"].map((skill, index) => (
            <span key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

{/* Mobile Development */}
      <div className="bg-[#111827] p-6 rounded-xl shadow-lg 
                      hover:shadow-green-500/40 hover:-translate-y-2 
                      transition-all duration-300">
        <h4 className="text-xl font-semibold text-green-400 mb-4">
          Mobile Development
        </h4>

        <div className="flex flex-wrap gap-3">
          {["Android Studio", "Kotlin","Java"].map((skill, index) => (
            <span key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

       {/* Software Engineering Fundamentals */}
      <div className="bg-[#111827] p-6 rounded-xl shadow-lg 
                      hover:shadow-blue-500/40 hover:-translate-y-2 
                      transition-all duration-300">
        <h4 className="text-xl font-semibold text-blue-400 mb-4">
          Software Engineering Fundamentals
        </h4>

        <div className="flex flex-wrap gap-3">
          {["Object-Oriented Programming (OOP)","Data Structures and Algorithms","Software Development Life Cycle (SDLC)","MVC Architecture","Design Patterns (Basic)","Agile & Screen Methodology"].map((skill, index) => (
            <span key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

{/* API Development & Testing*/}
      <div className="bg-[#111827] p-6 rounded-xl shadow-lg 
                      hover:shadow-green-500/40 hover:-translate-y-2 
                      transition-all duration-300">
        <h4 className="text-xl font-semibold text-green-400 mb-4">
          API Development & Testing
        </h4>

        <div className="flex flex-wrap gap-3">
          {["Postman"].map((skill, index) => (
            <span key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>


      {/* Version Control & Collaboration */}
      <div className="bg-[#111827] p-6 rounded-xl shadow-lg 
                      hover:shadow-blue-500/40 hover:-translate-y-2 
                      transition-all duration-300">
        <h4 className="text-xl font-semibold text-blue-400 mb-4">
          Version Control & Collaboration
        </h4>

        <div className="flex flex-wrap gap-3">
          {["GitHub","GitHub Desktop","Git","Branching & Pull Requests"].map((skill, index) => (
            <span key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

{/* Development Tools & IDEs */}
      <div className="bg-[#111827] p-6 rounded-xl shadow-lg 
                      hover:shadow-purple-500/40 hover:-translate-y-2 
                      transition-all duration-300">
        <h4 className="text-xl font-semibold text-purple-400 mb-4">
          Development Tools & IDEs
        </h4>

        <div className="flex flex-wrap gap-3">
          {["Visual Studio Code","Eclipse","Android Studio","dev c++","R Studio","IntelliJ IDEA" ,"Arduino IDE"].map((skill, index) => (
            <span key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>





    </div>
  </div>
</div>

    </section>
  );
}