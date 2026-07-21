"use client";
import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p className="font-mono text-cyan text-xs tracking-[0.25em] uppercase mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-ink">{title}</h2>
    </motion.div>
  );
}
