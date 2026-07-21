"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Ambient glow field */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-cyan/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[400px] rounded-full bg-violet/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#E8EAF0 1px, transparent 1px), linear-gradient(90deg, #E8EAF0 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="font-mono text-cyan text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          Software Engineering Student · Kuwait
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl sm:text-7xl font-extrabold text-ink leading-[1.05] mb-6"
        >
          Abdullatif Alzaid
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
          className="text-dim text-base sm:text-lg leading-relaxed max-w-xl mb-10"
        >
          I design, direct, and ship real production software — using AI-directed
          development workflows to turn business requirements into deployed products,
          while personally owning design, testing, and delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <a href="#projects"
            className="px-8 py-3.5 rounded-full font-semibold text-sm bg-ink text-void hover:bg-cyan transition-all hover:scale-105">
            View Projects
          </a>
          <a href="#contact"
            className="px-8 py-3.5 rounded-full font-semibold text-sm border border-line text-ink hover:border-cyan hover:text-cyan transition-all">
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="absolute bottom-10 text-dim hover:text-cyan transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
