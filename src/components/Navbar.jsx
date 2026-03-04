// src/components/Navbar.jsx
import React from "react";
import { HashLink as Link } from "react-router-hash-link"; // smooth hash linking

export default function Navbar() {
  return (
    <nav className="w-full bg-black bg-opacity-70 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Dewmini Chalakshana</div>
        <ul className="flex space-x-6 text-white">
          <li><Link smooth to="#/" className="hover:text-blue-400">Home</Link></li>
          <li><Link smooth to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link smooth to="/skills" className="hover:text-blue-400">Skills</Link></li>
          <li><Link smooth to="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link smooth to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}