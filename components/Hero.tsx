"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 border-b-2 border-ink">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center py-32">
        <motion.p
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-sans text-[11px] font-bold tracking-[0.12em] uppercase text-ink mb-6 border-b-[3px] border-red pb-1"
        >
          Software Engineering Student — Kuwait
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-[42px] sm:text-[64px] md:text-[80px] leading-[1.0] tracking-[-0.02em] sm:tracking-[-0.03em] text-ink mb-8"
        >
          ABDULLATIF
          <br />
          ALZAID
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }}
          className="text-[20px] leading-[1.65] text-ink max-w-xl mb-10"
        >
          I design, direct, and ship real production software — using AI-directed
          development to turn business requirements into deployed products, while
          personally owning design, testing, and delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <a href="#projects"
            className="px-6 py-2.5 bg-ink text-paper border-2 border-ink text-[14px] font-bold uppercase tracking-[0.06em] hover:bg-red hover:border-red transition-colors">
            View Projects
          </a>
          <a href="#contact"
            className="px-6 py-2.5 bg-transparent text-ink border-2 border-ink text-[14px] font-bold uppercase tracking-[0.06em] hover:bg-ink hover:text-paper transition-colors">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
