"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const groups = [
  { label: "AI-Directed Development", items: ["Claude Code", "Prompt-based engineering workflows", "AI coding tool orchestration"] },
  { label: "Tools & Platforms", items: ["Git / GitHub", "Vercel", "Deployment troubleshooting", "Microsoft Office"] },
  { label: "Product & Delivery", items: ["UI/UX design direction", "Project scoping", "Client management", "QA / cross-device testing"] },
  { label: "Languages", items: ["Arabic (Native)", "English (Proficient)"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="03 — Skills" title="What I bring" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-6 rounded-2xl bg-panel border border-line"
            >
              <p className="font-mono text-xs text-cyan tracking-wide uppercase mb-3">{g.label}</p>
              <ul className="space-y-1.5">
                {g.items.map((item) => (
                  <li key={item} className="text-dim text-sm">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
