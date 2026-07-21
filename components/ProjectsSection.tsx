"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const projects = [
  {
    name: "Eish w Dgous",
    tagline: "Kuwaiti heritage restaurant — client site",
    desc: "Full marketing site with a custom heritage-print identity: framed gallery, bill-of-fare menu layout, and a floating WhatsApp ordering button wired to the client's real number.",
    tags: ["Next.js", "Framer Motion", "Vercel"],
    href: "https://eish-w-dgous.vercel.app",
  },
  {
    name: "Flower Story Bakery",
    tagline: "Cakes & flowers — client site",
    desc: "Product-catalog marketing site built and shipped for a real Kuwaiti bakery, with its own distinct brand identity separate from every other client build.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    href: "https://flower-story-bakery.vercel.app",
  },
  {
    name: "Chatelet Coffee",
    tagline: "Café concept — client site",
    desc: "A moody, Parisian-inspired “l'heure bleue” identity built around a midnight-indigo palette for a café brand.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    href: "https://chatelet-coffee.vercel.app",
  },
  {
    name: "Lead Outreach System",
    tagline: "Internal tool",
    desc: "A Python data pipeline that consolidates and deduplicates business-lead data into a prioritized outreach tracker with automated scoring — used to run my own client-acquisition pipeline.",
    tags: ["Python", "openpyxl"],
    href: null,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="02 — Projects" title="Things I've shipped" />

        <div className="flex flex-col gap-5">
          {projects.map((p, i) => {
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-panel border border-line hover:border-cyan/40 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-ink font-bold text-lg flex items-center gap-2">
                      {p.name}
                      {p.href && (
                        <ArrowUpRight size={16} className="text-dim group-hover:text-cyan transition-colors" />
                      )}
                    </h3>
                    <p className="text-cyan text-xs font-mono mt-0.5">{p.tagline}</p>
                  </div>
                </div>
                <p className="text-dim text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-void border border-line text-dim">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
            return p.href ? (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">
                {Card}
              </a>
            ) : (
              <div key={p.name}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
