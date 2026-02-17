import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

        <p className="text-gray-600 text-center leading-relaxed">
          Hi! I'm Dewmini, an aspiring Web Developer passionate about creating clean,
          modern, and responsive websites using React and Tailwind CSS. I enjoy building
          projects that solve real-world problems and improve user experience.
        </p>
      </motion.div>
    </section>
  );
}
