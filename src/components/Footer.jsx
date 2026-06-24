import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#/" },
  { label: "About", href: "#/about" },
  { label: "Skills", href: "#/skills" },
  { label: "Projects", href: "#/projects" },
  { label: "Contact", href: "#/contact" },
];

const contact = {
  email: "dewminichalakshana456@gmail.com",
  phone: "+94 70 185 6794",
  phoneLink: "+94701856794",
  address: "Katugastota, Sri Lanka",
  github: "https://github.com/dew-02",
  linkedin: "https://www.linkedin.com/in/dewmini-jayasinghe-b9308b31a",
};

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 320);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScrollTop && (
        <Motion.button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-white shadow-2xl shadow-blue-950/40 transition hover:bg-purple-600"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -3 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </Motion.button>
      )}

      <footer className="border-t border-white/10 bg-[#0f172a]/88 py-12 backdrop-blur">
        <div className="page-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr_0.8fr]">
          <div>
            <a href="#/" className="flex items-center gap-3">
              <img
                src="/logome.png"
                alt="Dewmini logo"
                className="h-12 w-12 rounded-2xl border border-white/15 bg-white/8 p-1"
              />
              <div>
                <h2 className="text-xl font-black text-white">
                  Dewmini Chalakshana
                </h2>
                <p className="text-sm font-semibold text-blue-100/70">
                  Aspiring Full-Stack Developer
                </p>
              </div>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Building clean, responsive web and mobile experiences with a
              practical full-stack mindset.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
              Explore
            </h3>
            <div className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-400 transition hover:text-blue-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
              Contact
            </h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-slate-400">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 transition hover:text-blue-300"
              >
                <FaEnvelope className="text-blue-300" /> {contact.email}
              </a>
              <a
                href={`tel:${contact.phoneLink}`}
                className="flex items-center gap-3 transition hover:text-blue-300"
              >
                <FaPhone className="text-blue-300" /> {contact.phone}
              </a>
              <span className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-300" /> {contact.address}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
              Social
            </h3>
            <div className="mt-5 flex gap-3">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white transition hover:border-blue-300 hover:text-blue-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white transition hover:border-blue-300 hover:text-blue-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="page-shell mt-10 border-t border-white/10 pt-6 text-center text-sm font-semibold text-slate-500">
          © {currentYear} Dewmini Chalakshana. All rights reserved.
        </div>
      </footer>
    </>
  );
}
