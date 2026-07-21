"use client";
import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p className="font-sans text-[11px] font-bold tracking-[0.12em] uppercase text-ink mb-3">{eyebrow}</p>
      <h2 className="font-display text-[38px] leading-[1.1] tracking-[-0.02em] text-ink">{title}</h2>
      <div className="mt-4 w-16 h-[3px] bg-red" />
    </motion.div>
  );
}
