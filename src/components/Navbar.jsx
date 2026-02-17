import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold tracking-wide text-blue-600 cursor-pointer"
          onClick={() => handleClick("home")}
        >
          Dewmini
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="relative group text-gray-700 hover:text-blue-600 transition"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleClick(link.id)}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
