// src/components/Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-gradient-to-r from-gray-500 bg-black-70 to-gray-900 fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo + Name */}
        <a href="#hero" className="flex items-center gap-2">
          <img src="/logome.png" alt="Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold">
            <span className="text-white">Dewmini</span>{" "}
            <span className="text-white">Chalakshana</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li><a href="#hero" className="hover:text-blue-300">Home</a></li>
          <li><a href="#about" className="hover:text-blue-300">About</a></li>
          <li><a href="#skills" className="hover:text-blue-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex flex-col items-center space-y-4 py-4">
          <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}