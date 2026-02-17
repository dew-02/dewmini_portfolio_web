import React from "react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Dewmini</h1>
      <p className="text-xl text-gray-700 mb-6">Aspiring Web Developer | React & Tailwind Enthusiast</p>
      <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        View My Work
      </a>
    </section>
  );
}
