import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Home", href: "#/" },
  { label: "About", href: "#/about" },
  { label: "Skills", href: "#/skills" },
  { label: "Projects", href: "#/projects" },
  { label: "Contact", href: "#/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-gradient-to-r from-blue-950/92 via-black/90 to-gray-900/92 backdrop-blur-2xl">
      <div className="page-shell flex h-20 items-center justify-between">
        <a href="#/" className="group flex items-center gap-3">
          <img
            src="/logome.png"
            alt="Dewmini logo"
            className="h-11 w-11 rounded-2xl border border-white/15 bg-white/8 p-1 shadow-lg transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
          />
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-[0.22em] text-white">
              Dewmini
            </span>
            <span className="block text-xs font-semibold text-blue-100/75">
              Full-Stack Developer
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-full px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10 hover:text-blue-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#/contact" className="primary-button hidden md:inline-flex">
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0f172a]/96 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-sm flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-center text-sm font-bold text-slate-100 transition hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
