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
    <section id="skills" className="py-24 px-4 sm:px-6 border-b-2 border-ink">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="What I bring" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-ink border-b-2 border-ink pb-2 mb-1">
                {g.label}
              </p>
              <ul>
                {g.items.map((item) => (
                  <li key={item} className="text-text-secondary text-[15px] py-3.5 border-b border-border-subtle">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
