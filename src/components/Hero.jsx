import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Dewmini
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl text-gray-600 mb-8"
      >
        Aspiring Web Developer | React & Tailwind Enthusiast
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80"
      >
        View My Work
      </motion.a>

    </section>
  );
}
