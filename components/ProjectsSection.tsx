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
    featured: true,
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
    <section id="projects" className="py-24 px-4 sm:px-6 border-b-2 border-ink">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="Things I've shipped" />

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => {
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`group relative p-6 sm:p-7 bg-paper border-2 ${
                  p.featured ? "border-t-[4px] border-t-red border-x-border-subtle border-b-border-subtle" : "border-border-subtle"
                } hover:border-ink transition-colors duration-200`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-display text-xl text-ink flex items-center gap-2">
                      {p.name}
                      {p.href && <ArrowUpRight size={18} className="text-text-tertiary group-hover:text-red transition-colors" />}
                    </h3>
                    <p className="font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-text-secondary mt-1">
                      {p.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary text-[15px] leading-[1.6] mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[12px] px-2.5 py-1 border-2 border-border-medium text-text-secondary">
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
