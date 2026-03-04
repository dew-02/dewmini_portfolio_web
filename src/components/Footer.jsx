// src/components/Footer.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const contactDetails = {
    email: "dewminichalakshana456@gmail.com",
    phone: "+94 70 185 6794",
    phoneLink: "+94701856794",
    address: "No: 70/1,Pallethalawinna,katugastota, Sri Lanka",
    github: "https://github.com/dew-02",
    linkedin: "https://www.linkedin.com/in/dewmini-jayasinghe-b9308b31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSocialClick = (url) => window.open(url, "_blank");
  const handleEmailClick = () => (window.location.href = `mailto:${contactDetails.email}`);
  const handleWhatsAppClick = () => window.open(contactDetails.whatsapp, "_blank");
  const handlePhoneClick = () => (window.location.href = `tel:${contactDetails.phoneLink}`);

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Dewmini Chalakshana</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Full Stack Developer (MERN Stack). Passionate about building scalable web and mobile apps.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center space-x-2"><FaMapMarkerAlt className="text-blue-400" /><span>{contactDetails.address}</span></div>
              <div className="flex items-center space-x-2"><FaPhone className="text-blue-400" /><span>{contactDetails.phone}</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-center gap-2 cursor-pointer" onClick={handleEmailClick}><FaEnvelope className="text-blue-400" /> {contactDetails.email}</li>
              <li className="flex items-center gap-2 cursor-pointer" onClick={handlePhoneClick}><FaPhone className="text-blue-400" /> {contactDetails.phone}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-3">
              <button onClick={() => handleSocialClick(contactDetails.github)} className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 text-white"><FaGithub /></button>
              <button onClick={() => handleSocialClick(contactDetails.linkedin)} className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 text-white"><FaLinkedin /></button>
              <button onClick={handleEmailClick} className="p-3 bg-slate-800 rounded-lg hover:bg-red-500 text-white"><SiGmail /></button>
              <button onClick={handleWhatsAppClick} className="p-3 bg-slate-800 rounded-lg hover:bg-green-500 text-white"><FaWhatsapp /></button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-slate-700 text-center text-slate-400 text-sm">
          © {currentYear} <span className="text-blue-400 font-semibold">Dewmini Chalakshana</span>. All rights reserved. 
        </div>
      </footer>
    </>
  );
};

export default Footer;