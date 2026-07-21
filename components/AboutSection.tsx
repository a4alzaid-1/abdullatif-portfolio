"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="01 — About" title="How I build" />
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-dim leading-relaxed text-base sm:text-lg"
        >
          <p>
            I&apos;m a Software Engineering student at Abdulla Al-Salem University (AASU) in
            Kuwait. My core skill is <span className="text-ink font-semibold">directing AI coding tools</span> —
            most recently Claude Code — to take a business problem all the way to a deployed
            product, while personally owning every decision that actually determines whether
            the product is good: design direction, information architecture, content, and quality.
          </p>
          <p>
            In practice that means I define the scope, make every UI/UX and brand decision,
            test the result myself across devices, and diagnose real production issues
            (broken deployments, DNS misconfiguration, Git authentication failures) by reading
            logs and documentation — then direct the tooling to implement the fix.
          </p>
          <p>
            I&apos;ve used this workflow to run a small independent freelance practice — building
            and shipping live websites for real small businesses in Kuwait, end to end:
            outreach, pricing, delivery, and ongoing support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
